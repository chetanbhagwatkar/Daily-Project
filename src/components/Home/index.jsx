/* eslint-disable react/prop-types */


import "./index.css";
// this are internal css in jsx i.e. REACT
// const styling = {
//     backgroundColor: "yellow",
//     borderRadius: 12,
//     fontSize:50
// }
const Home = (props) => {
	// const {details}=props;
	// const{id,name1,lastName} = details; // variables should be the same as given inside the object from "App" component
const {userList}=props;

	return (
		<>
	
			<div className="list-cont" >

				<ul className="list">

				<li style={{color:"red"}} >{userList.id}</li>
				<li style={{color:"blue"}}>{ userList.name}</li>
				<li style={{color:"purple"}}> {userList.status} </li>
				<li style={{color:"green"}}>{ userList.email} </li>
				<li style={{color:"orange"}}> {userList.gender} </li>
				
				</ul>
			</div>

		</>
	);
};

export default Home;
