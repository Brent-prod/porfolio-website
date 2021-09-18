// import './works.scss';
// import { useState } from 'react'

// export default function Works() {

//    const [currentSlide, setCurrentSlide] = useState(0) // this state is to set the default on load to 0
// 	const data = [
// 		{
// 			id: '1',
// 			icon: './assets/mobile.png',
// 			title: 'Web Design',
// 			desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
// 			img:
// 				'https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930'
// 		},
// 		{
// 			id: '2',
// 			icon: './assets/globe.png',
// 			title: 'Mobile Application',
// 			desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
// 			img: 'https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg'
// 		},
// 		{
// 			id: '3',
// 			icon: './assets/writing.png',
// 			title: 'Branding',
// 			desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
// 			img: 'https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg'
// 		}
// 	];

//    const handleClick = (way) => {
//       way === "left"
//         ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
//         : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
//     }; // if the slide is 0 we cannot go to the left, so when we click on the arrows it's going to check which slide we are on and allow to go to the next one
//     // or if the slide is 1 go to 2 and if it's 2 go to zero

// 	return (
// 		<div className="works" id="works">
// 			<div className="slider" style={{ transform: `translateX(-${currentSlide *100}vw)` }} // here we are controlling the slides
//          >
// 				{data.map((d) => (
// 					<div className="container">
// 						<div className="item">
// 							<div className="left">
// 								<div className="leftContainer">
// 									<div className="imgContainer">
// 										<img src={d.icon} alt="" />
// 									</div>
// 									<h2>{d.title}</h2>
// 									<p>{d.description}</p>
// 									<span>Projects</span>
// 								</div>
// 							</div>
// 							<div className="right">
// 								<img
// 									src="https://menupics-aus.myposapi.com/menupics/2030136/12390dd8-74e7-4832-918e-1ad88f26a78f.JPG"
// 									alt=""
// 								/>
// 							</div>
// 						</div>
// 					</div>
// 				))}
// 			</div>
// 			<img
// 				src="assets/arrow.png"
// 				className="arrow left"
// 				alt="" onClick={() => handleClick('left')}/>

// 			<img
// 				src="assets/arrow.png"
// 				className="arrow right"
// 				alt="" onClick={() => handleClick('right')}/>
// 		</div>
// 	);
// }
