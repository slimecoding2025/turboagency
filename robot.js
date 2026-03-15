const container = document.getElementById("robot-container");

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
75,
container.clientWidth/container.clientHeight,
0.1,
1000
);

const renderer = new THREE.WebGLRenderer({alpha:true});

renderer.setSize(container.clientWidth,container.clientHeight);

container.appendChild(renderer.domElement);



const light = new THREE.PointLight(0xffffff,1);
light.position.set(5,5,5);
scene.add(light);



const material = new THREE.MeshStandardMaterial({
color:0x00eaff,
metalness:0.7,
roughness:0.3
});



const body = new THREE.Mesh(
new THREE.BoxGeometry(1,1.5,0.6),
material
);

scene.add(body);



const head = new THREE.Mesh(
new THREE.BoxGeometry(0.7,0.7,0.7),
material
);

head.position.y = 1.2;

body.add(head);



const armL = new THREE.Mesh(
new THREE.BoxGeometry(0.3,1,0.3),
material
);

armL.position.x = -0.8;
armL.position.y = 0.2;

body.add(armL);



const armR = new THREE.Mesh(
new THREE.BoxGeometry(0.3,1,0.3),
material
);

armR.position.x = 0.8;
armR.position.y = 0.2;

body.add(armR);



camera.position.z = 4;



document.addEventListener("mousemove",(e)=>{

let x = (e.clientX/window.innerWidth)*2-1;
let y = -(e.clientY/window.innerHeight)*2+1;

body.rotation.y = x*0.8;
body.rotation.x = y*0.4;

});



function animate(){

requestAnimationFrame(animate);

armL.rotation.z = Math.sin(Date.now()*0.002)*0.5;
armR.rotation.z = -Math.sin(Date.now()*0.002)*0.5;

renderer.render(scene,camera);

}

animate();