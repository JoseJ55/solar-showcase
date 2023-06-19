import { useEffect, useRef } from "react";
import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

function Canvas() {
    const mountRef = useRef(null);
    const canvasRef = useRef(null);

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

        // const canvas = document.getElementById('header-canvas');
        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            antialias: true,
        });
        renderer.setSize(current.clientWidth, current.clientHeight);

        // This is to move the camera around and will be remove later on.
        // const controls = new OrbitControls( camera, renderer.domElement );
        // controls.update();

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.02);
        ambientLight.castShadow = true;
        scene.add(ambientLight);
        
        const sunLight = new THREE.PointLight(0xffffff, 1.5, 0);
        sunLight.position.set(-70, 40, 0);
        sunLight.intensity = 4;
        sunLight.castShadow = true;
        scene.add(sunLight);

        // Helper to view the light source.
        // const sphereSize = 50;
        // const pointLightHelper = new THREE.PointLightHelper( sunLight, sphereSize );
        // scene.add( pointLightHelper );

        // This is the light of the sun. Since items can't emit light spotlight is used to make it brighter in the opposite direction.
        const spotLight = new THREE.SpotLight(0xffffff);
        spotLight.position.set(32, -20, 90);
        spotLight.castShadow = false;
        spotLight.power = 6;
        spotLight.target.position.set(-70, 40, 0)
        spotLight.angle = Math.PI/24;
        scene.add(spotLight);
        scene.add(spotLight.target);

        // helper to view the light for the sun.
        // const spotLightHelper = new THREE.SpotLightHelper( spotLight, 0xffffff );
        // spotLightHelper.cone = 2
        // scene.add( spotLightHelper );

        // This is for the sun model
        const sunGeometry = new THREE.SphereGeometry( 15, 32, 18 );
        const sunUV = new THREE.TextureLoader().load('UVMaps/sun-uv-map.jpg');
        const sunMaterial = new THREE.MeshStandardMaterial({
            map: sunUV,
        })
        const sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);
        scene.add(sunMesh);
        sunMesh.position.set(-70, 40, 0)

        // This is for the earth model.
        const earthGeometry = new THREE.SphereGeometry(5, 18, 12);
        const earthUV = new THREE.TextureLoader().load('UVMaps/earth-uv-map.jpg');
        const earthMaterial = new THREE.MeshStandardMaterial({
            map: earthUV,
        });
        const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
        scene.add(earthMesh);
        earthMesh.position.set(-20, 25, -70);

        // This is for mercury model.
        const mercuryGeometry = new THREE.SphereGeometry(3.5, 13, 16);
        const mercuryUV = new THREE.TextureLoader().load('UVMaps/mercury-uv-map.jpg');
        const mercuryMaterial = new THREE.MeshStandardMaterial({
            map: mercuryUV,
        });
        const mercuryMesh = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
        scene.add(mercuryMesh);
        mercuryMesh.position.set(-25, -5, 60);

        // This is for mars model.
        const marsGeometry = new THREE.SphereGeometry(4, 13, 24);
        const marsUV = new THREE.TextureLoader().load('UVMaps/mars-uv-map.jpg');
        const marsMaterial = new THREE.MeshStandardMaterial({
            map: marsUV,
        });
        const marsMesh = new THREE.Mesh(marsGeometry, marsMaterial);
        scene.add(marsMesh);
        marsMesh.position.set(6, -3, 93);

        const animate = () => {
            sunMesh.rotation.y += 0.005;
            mercuryMesh.rotation.y += 0.003;
            earthMesh.rotation.y += 0.002;
            marsMesh.rotation.y += 0.001;
            renderer.render(scene, camera);
            window.requestAnimationFrame(animate);
        }

        const handleResize = () => {
            const { clientWidth, clientHeight } = current;
            camera.aspect = clientWidth / clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(clientWidth, clientHeight);
        };

        animate();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])

    return (
        <div 
            ref={mountRef} 
            id="canvas-container"
            style={{width: '100%', height: '100%', minHeight: '100vh', maxHeight: '100vh'}}
            >
            <canvas ref={canvasRef} id="header-canvas" style={{width: '100%', height: '100%', minHeight: '100%'}} />
        </div>
    )
}

export default Canvas;