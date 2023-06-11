import { useEffect, useRef, useContext, useCallback, useState } from "react";
import * as THREE from 'three';
import { BodyContext } from "../../../bodyContext";
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

function Canvas ({ name }) {
    const mountRef = useRef();
    const canvasRef = useRef();
    const meshRef = useRef();
    const isFactRef = useRef(false);
    const isHistoryRef = useRef(false);

    const { isFact, isHistory } = useContext(BodyContext);

    useEffect(() => {
        isFactRef.current = isFact;
        isHistoryRef.current = isHistory;
    }, [isFact, isHistory]);

    useEffect(() => {
        const { current } = mountRef;
        if(!current) { return; };

        // Makes the scene and set a static background since the scene won't move.
        const scene = new THREE.Scene();
        const background = new THREE.TextureLoader().load('backgrounds/stars-background.jpg');
        scene.background = background;
        scene.backgroundIntensity = .1;

        const camera = new THREE.PerspectiveCamera(
            50,
            current.clientWidth / current.clientHeight,
            1,
            1000
        );
        camera.position.z = 100;

        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            antialias: true,
        });
        renderer.setSize(current.clientWidth, current.clientHeight);

        // This is to move the camera around and will be remove later on.
        // const controls = new OrbitControls( camera, renderer.domElement );
        // controls.update();

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
        ambientLight.castShadow = true;
        scene.add(ambientLight);

        const geometry = new THREE.SphereGeometry( 15, 32, 18 );
        const UV = new THREE.TextureLoader().load(`UVMaps/${name.toLowerCase()}-uv-map.jpg`);
        const material = new THREE.MeshStandardMaterial({ map: UV });
        const Mesh = new THREE.Mesh(geometry, material);
        scene.add(Mesh);
        Mesh.position.set(0, 0, 0)
        meshRef.current = Mesh;

        const animate = () => {
            Mesh.rotation.y += 0.005;
            const isFact = isFactRef.current;
            const isHistory = isHistoryRef.current;

            if (isHistory && meshRef.current.position.x >= -40 && !isFact) {
                meshRef.current.position.x -= 0.5;
            } 
            else if (isFact && meshRef.current.position.x <= 40 && !isHistory) {
                meshRef.current.position.x += 0.5;
            } 
            else if (!isFact && !isHistory) {
                if (meshRef.current.position.x < 0) {
                    meshRef.current.position.x += 0.5;
                } else if (meshRef.current.position.x > 0) {
                    meshRef.current.position.x -= 0.5;
                } else {
                    meshRef.current.position.x = 0;
                }
            }

            renderer.render(scene, camera);
            window.requestAnimationFrame(animate);
        }
        animate();

        return () => {
            scene.remove(Mesh);
            renderer.dispose();
        };
    }, [ isFact, isHistory ])

    return (
        <div 
            ref={mountRef}
            style={{ width: '100%', minHeight: '100%' }}
            >
            <canvas ref={canvasRef} id="header-canvas" style={{width: '100%', minHeight: '100%'}} />
        </div>
    )
}

export default Canvas;