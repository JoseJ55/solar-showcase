import { useEffect, useRef } from "react";
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

function Canvas() {
    const mountRef = useRef(null);
    const canvasRef = useRef(null);

    function rotateAboutPoint(obj, point, axis, theta, pointIsWorld){
        pointIsWorld = (pointIsWorld === undefined)? false : pointIsWorld;
    
        if(pointIsWorld){
            obj.parent.localToWorld(obj.position); // compensate for world coordinate
        }
    
        obj.position.sub(point); // remove the offset
        obj.position.applyAxisAngle(axis, theta); // rotate the POSITION
        obj.position.add(point); // re-add the offset
    
        if(pointIsWorld){
            obj.parent.worldToLocal(obj.position); // undo world coordinates compensation
        }
    
        obj.rotateOnAxis(axis, theta); // rotate the OBJECT
    }

    useEffect(() => {
        const { current } = mountRef;
        if(!current) { return; };

        const scene = new THREE.Scene();
        // const background = new THREE.TextureLoader().load('backgrounds/stars-background.jpg');
        // scene.background = background;
        // scene.backgroundIntensity = .1;

        const camera = new THREE.PerspectiveCamera(
            50,
            current.clientWidth / current.clientHeight,
            1,
            1000
        );
        camera.position.x = 25;
        camera.position.y = -81;
        camera.position.z = 49;

        camera.lookAt(0, 0, 0);

        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            antialias: true,
        });
        renderer.setSize(current.clientWidth, current.clientHeight);

        // This is to move the camera around and will be remove later on.
        // const controls = new OrbitControls( camera, renderer.domElement );
        // controls.update();

        // controls.addEventListener( "change", event => {  
        //     console.log( controls.object ); 
        // });

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
        ambientLight.castShadow = true;
        scene.add(ambientLight);

        function createOrbitCircle(radius, segments, color) {
            const geometry = new THREE.BufferGeometry();
            const positions = [];

            for (let i = 0; i <= segments; i++) {
                const theta = (i / segments) * Math.PI * 2;
                const x = radius * Math.cos(theta);
                const y = radius * Math.sin(theta);

                positions.push(x, y, 0);
            }

            geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
            const material = new THREE.LineBasicMaterial({ color: color, opacity: 0 });
            const circle = new THREE.LineLoop(geometry, material);
            return circle;
        }

        // This is for the sun model
        const sunGeometry = new THREE.SphereGeometry( 3, 12, 18 );
        const sunUV = new THREE.TextureLoader().load('UVMaps/sun-uv-map.jpg');
        const sunMaterial = new THREE.MeshStandardMaterial({ map: sunUV });
        const sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);
        sunMesh.name = 'sun';
        scene.add(sunMesh);
        sunMesh.position.set(0, 0, 0)

        const orbitColor = 0xC7C6C3;

        // This is for mercury model.
        const mercuryGeometry = new THREE.SphereGeometry(1.5, 13, 18);
        const mercuryUV = new THREE.TextureLoader().load('UVMaps/mercury-uv-map.jpg');
        const mercuryMaterial = new THREE.MeshStandardMaterial({
            map: mercuryUV,
        });
        const mercuryMesh = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
        mercuryMesh.name = 'mercury';
        scene.add(mercuryMesh);
        mercuryMesh.position.set(5, 0, 0);

        const mercuryOrbit = createOrbitCircle(5, 64, orbitColor);
        scene.add(mercuryOrbit);

        // This is for venus model.
        const venusGeometry = new THREE.SphereGeometry(1.5, 13, 18);
        const venusUV = new THREE.TextureLoader().load('UVMaps/venus-uv-map.jpg');
        const venusMaterial = new THREE.MeshStandardMaterial({ map: venusUV });
        const venusMesh = new THREE.Mesh(venusGeometry, venusMaterial);
        venusMesh.name = 'venus';
        scene.add(venusMesh);
        venusMesh.position.set(10, 0, 0);

        const venusOrbit = createOrbitCircle(10, 64, orbitColor);
        scene.add(venusOrbit);

        // This is for earth model.
        const earthGeometry = new THREE.SphereGeometry(1.5, 13, 18);
        const earthUV = new THREE.TextureLoader().load('UVMaps/earth-uv-map.jpg');
        const earthMaterial = new THREE.MeshStandardMaterial({
            map: earthUV,
        });
        const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
        earthMesh.name = 'earth';
        scene.add(earthMesh);
        earthMesh.position.set(15, 0, 0);

        const earthOrbit = createOrbitCircle(15, 64, orbitColor);
        scene.add(earthOrbit);

        // This is for mars model.
        const marsGeometry = new THREE.SphereGeometry(1.5, 13, 18);
        const marsUV = new THREE.TextureLoader().load('UVMaps/mars-uv-map.jpg');
        const marsMaterial = new THREE.MeshStandardMaterial({
            map: marsUV,
        });
        const marsMesh = new THREE.Mesh(marsGeometry, marsMaterial);
        marsMesh.name = 'mars';
        scene.add(marsMesh);
        marsMesh.position.set(20, 0, 0);

        const marsOrbit = createOrbitCircle(20, 64, orbitColor);
        scene.add(marsOrbit);

        // This is for jupiter model.
        const jupiterGeometry = new THREE.SphereGeometry(1.5, 13, 18);
        const jupiterUV = new THREE.TextureLoader().load('UVMaps/jupiter-uv-map.jpg');
        const jupiterMaterial = new THREE.MeshStandardMaterial({
            map: jupiterUV,
        });
        const jupiterMesh = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
        jupiterMesh.name = 'jupiter';
        scene.add(jupiterMesh);
        jupiterMesh.position.set(25, 0, 0);

        const jupiterOrbit = createOrbitCircle(25, 64, orbitColor);
        scene.add(jupiterOrbit);

        // This is for saturn model.
        const saturnGeometry = new THREE.SphereGeometry(1.5, 13, 18);
        const saturnUV = new THREE.TextureLoader().load('UVMaps/saturn-uv-map.jpg');
        const saturnMaterial = new THREE.MeshStandardMaterial({
            map: saturnUV,
        });
        const saturnMesh = new THREE.Mesh(saturnGeometry, saturnMaterial);
        saturnMesh.name = 'saturn';
        scene.add(saturnMesh);
        saturnMesh.position.set(30, 0, 0);

        const saturnOrbit = createOrbitCircle(30, 64, orbitColor);
        scene.add(saturnOrbit);
        
        // This is for uranus model.
        const uranusGeometry = new THREE.SphereGeometry(1.5, 13, 18);
        const uranusUV = new THREE.TextureLoader().load('UVMaps/uranus-uv-map.jpg');
        const uranusMaterial = new THREE.MeshStandardMaterial({
            map: uranusUV,
        });
        const uranusMesh = new THREE.Mesh(uranusGeometry, uranusMaterial);
        uranusMesh.name = 'uranus';
        scene.add(uranusMesh);
        uranusMesh.position.set(35, 0, 0);

        const uranusOrbit = createOrbitCircle(35, 64, orbitColor);
        scene.add(uranusOrbit);

        // This is for neptune model.
        const neptuneGeometry = new THREE.SphereGeometry(1.5, 13, 18);
        const neptuneUV = new THREE.TextureLoader().load('UVMaps/neptune-uv-map.jpg');
        const neptuneMaterial = new THREE.MeshStandardMaterial({
            map: neptuneUV,
        });
        const neptuneMesh = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
        neptuneMesh.name = 'neptune';
        scene.add(neptuneMesh);
        neptuneMesh.position.set(40, 0, 0);

        const neptuneOrbit = createOrbitCircle(40, 64, orbitColor);
        scene.add(neptuneOrbit);

        // var orbitingObjects = [mercuryMesh];
        // var pivot = new THREE.Object3D();
        // pivot.position.set(0, 0, 0);
        // pivot.rotation.set(0, 0, 0);

        // for(var i = 0; i < orbitingObjects.length; i++) {
        //     pivot.attach(orbitingObjects[i]);
        // }

        // pivot.rotation.x = Math.PI / 2;
        // scene.add(mercuryMesh);
        rotateAboutPoint(mercuryMesh, new THREE.Vector3(0, 0, 0), new THREE.Vector3(1, 0, 0), THREE.MathUtils.degToRad(30), true);
        
        // Here is code for interacting with objects on the canvas.
        var selectedObject;
        let raycaster = new THREE.Raycaster();
        let mouse = new THREE.Vector2();

        const onclick = (e) => {
            e.preventDefault();

            const canvasBounds = renderer.domElement.getBoundingClientRect();

            mouse.x = ((e.clientX - canvasBounds.left) / canvasBounds.width) * 2 - 1;
            mouse.y = -((e.clientY - canvasBounds.top) / canvasBounds.height) * 2 + 1;

            raycaster.setFromCamera(mouse, camera);

            let intersects = raycaster.intersectObjects(scene.children);

            if(intersects.length > 0) {
                selectedObject = intersects[0].object;

                switch (selectedObject.name) {
                    case 'sun': 
                        console.log('Interacted with the sun object');
                        break;
                    case 'mercury': 
                        console.log('Interacted with the mercury object');
                        break;
                    case 'venus': 
                        console.log('Interacted with the venus object');
                        break;
                    case 'earth': 
                        console.log('Interacted with the earth object');
                        break;
                    case 'mars': 
                        console.log('Interacted with the mars object');
                        break;
                    case 'jupiter': 
                        console.log('Interacted with the jupiter object');
                        break;
                    case 'saturn': 
                        console.log('Interacted with the saturn object');
                        break;
                    case 'uranus': 
                        console.log('Interacted with the uranus object');
                        break;
                    case 'neptune': 
                        console.log('Interacted with the neptune object');
                        break;
                    default:
                        break;
                }
            }
        }

        renderer.domElement.addEventListener('click', onclick, true)

        var t = 0;
        const animate = () => {
            t += 0.01;
            sunMesh.rotation.x = -Math.PI / 2;
            sunMesh.rotation.y += -0.005;

            mercuryMesh.rotation.x = -Math.PI / 2;
            mercuryMesh.rotation.y += -0.005;
            mercuryMesh.position.x = 5*Math.cos(t * 4);
            mercuryMesh.position.y = 5*Math.sin(t * 4);

            venusMesh.rotation.x = -Math.PI / 2;
            venusMesh.rotation.y += -0.005;
            venusMesh.position.x = 10*Math.cos(t * 2);
            venusMesh.position.y = 10*Math.sin(t * 2);

            earthMesh.rotation.x = -Math.PI / 2;
            earthMesh.rotation.y += -0.005;
            earthMesh.position.x = 15*Math.cos(t);
            earthMesh.position.y = 15*Math.sin(t);

            marsMesh.rotation.x = -Math.PI / 2;
            marsMesh.rotation.y += -0.005;
            marsMesh.position.x = 20*Math.cos(t * 0.5);
            marsMesh.position.y = 20*Math.sin(t * 0.5);

            jupiterMesh.rotation.x = -Math.PI / 2;
            jupiterMesh.rotation.y += -0.005;
            jupiterMesh.position.x = 25*Math.cos(t * (1/12));
            jupiterMesh.position.y = 25*Math.sin(t * (1/12));

            saturnMesh.rotation.x = -Math.PI / 2;
            saturnMesh.rotation.y += -0.005;
            saturnMesh.position.x = 30*Math.cos(t * (1/29));
            saturnMesh.position.y = 30*Math.sin(t * (1/29));

            uranusMesh.rotation.x = -Math.PI / 2;
            uranusMesh.rotation.y += -0.005;
            uranusMesh.position.x = 35*Math.cos(t * (1/84));
            uranusMesh.position.y = 35*Math.sin(t * (1/84));

            neptuneMesh.rotation.x = -Math.PI / 2;
            neptuneMesh.rotation.y += -0.005;
            neptuneMesh.position.x = 40*Math.cos(t * (1/165));
            neptuneMesh.position.y = 40*Math.sin(t * (1/165));

            renderer.render(scene, camera);
            window.requestAnimationFrame(animate);
        }
        animate();
    }, [])

  return (
    <div 
        ref={mountRef} 
        style={{width: '100%', minHeight: '100%'}}>
        <canvas ref={canvasRef} style={{width: '100%', minHeight: '100%'}} />
    </div>
  )
}

export default Canvas;