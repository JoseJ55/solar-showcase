import { useEffect, useRef, useState } from "react";
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

function Canvas() {
    const mountRef = useRef(null);
    const canvasRef = useRef(null);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

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
        const controls = new OrbitControls( camera, renderer.domElement );
        controls.update();

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.02);
        ambientLight.castShadow = true;
        scene.add(ambientLight);
        
        const sunLight = new THREE.PointLight(0xffffff, 1.5, 0);
        if (windowWidth < 500) sunLight.position.set(-25, 50, -5);
        else if (windowWidth < 800) sunLight.position.set(-35, 45, 0);
        else if (windowWidth < 1100) sunLight.position.set(-30, 45, 5);
        else if (windowWidth < 1500) sunLight.position.set(-30, 35, 10);
        else sunLight.position.set(-70, 40, 0);
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
        if (windowWidth < 500) spotLight.target.position.set(-25, 50, -5);
        else if (windowWidth < 800) spotLight.target.position.set(-35, 45, 0);
        else if (windowWidth < 1100) spotLight.target.position.set(-30, 45, 5);
        else if (windowWidth < 1500) spotLight.target.position.set(-30, 35, 10);
        else spotLight.target.position.set(-70, 40, 0);
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
        if (windowWidth < 500) sunMesh.position.set(-25, 50, -5);
        else if (windowWidth < 800) sunMesh.position.set(-35, 45, 0);
        else if (windowWidth < 1100) sunMesh.position.set(-30, 45, 5);
        else if (windowWidth < 1500) sunMesh.position.set(-30, 35, 10);
        else sunMesh.position.set(-70, 40, 0);

        // This is for the earth model.
        const earthGeometry = new THREE.SphereGeometry(5, 18, 12);
        const earthUV = new THREE.TextureLoader().load('UVMaps/earth-uv-map.jpg');
        const earthMaterial = new THREE.MeshStandardMaterial({
            map: earthUV,
        });
        const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
        scene.add(earthMesh);
        if (windowWidth < 500) earthMesh.position.set(10, 25, -70);
        else if (windowWidth < 800) earthMesh.position.set(5, 25, -80);
        else if (windowWidth < 1100) earthMesh.position.set(20, 25, -80);
        else if (windowWidth < 1500) earthMesh.position.set(30, 30, -95);
        else earthMesh.position.set(-20, 25, -70);

        // This is for mercury model.
        const mercuryGeometry = new THREE.SphereGeometry(3.5, 13, 16);
        const mercuryUV = new THREE.TextureLoader().load('UVMaps/mercury-uv-map.jpg');
        const mercuryMaterial = new THREE.MeshStandardMaterial({
            map: mercuryUV,
        });
        const mercuryMesh = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
        scene.add(mercuryMesh);
        if (windowWidth < 500) mercuryMesh.position.set(-30, -30, -30);
        else if (windowWidth < 800) mercuryMesh.position.set(-30, -20, -20);
        else if (windowWidth < 1100) mercuryMesh.position.set(-25, -15, 10);
        else if (windowWidth < 1500) mercuryMesh.position.set(-40, -25, -45);
        else mercuryMesh.position.set(-25, -5, 60);

        // This is for mars model.
        const marsGeometry = new THREE.SphereGeometry(4, 13, 24);
        const marsUV = new THREE.TextureLoader().load('UVMaps/mars-uv-map.jpg');
        const marsMaterial = new THREE.MeshStandardMaterial({
            map: marsUV,
        });
        const marsMesh = new THREE.Mesh(marsGeometry, marsMaterial);
        scene.add(marsMesh);
        if (windowWidth < 500) marsMesh.position.set(2, -5, 93);
        else if (windowWidth < 800) marsMesh.position.set(2, -6, 93);
        else if (windowWidth < 1100) marsMesh.position.set(4, -6, 93);
        else if (windowWidth < 1500) marsMesh.position.set(2, -5, 90);
        else marsMesh.position.set(6, -3, 93);

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
            if (
                (clientWidth < 500 && windowWidth > 500) ||
                (clientWidth > 500 && clientWidth < 800 && (windowWidth < 500 || windowWidth > 800)) ||
                (clientWidth > 800 && clientWidth < 1100 && (windowWidth < 800 || windowWidth > 1100)) ||
                (clientWidth > 1100 && clientWidth < 1500 && (windowWidth < 1100 || windowWidth > 1500)) ||
                (clientWidth > 1500 && windowWidth < 1500)
            ) {
                console.log(clientWidth);
                setWindowWidth(clientWidth);
            }
            camera.aspect = clientWidth / clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(clientWidth, clientHeight);
        };

        animate();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [windowWidth])

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