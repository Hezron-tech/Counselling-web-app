
import React from "react";

import  './footer.css';

const Footer = () => {
  return (
	<div class="footer-dark">
	<footer>
		
		<div class="container">
			<div class="row">
				<div class="col-sm-6 col-md-3 item">
					<h3>Services</h3>
					<ul>
						<li><a href="#">Psychology Therapy</a></li>
						<li><a href="#">Individuals</a></li>
						<li><a href="#">Family</a></li>
						<li><a href="#">Couple</a></li>
					</ul>
				</div>
				<div class="col-sm-6 col-md-3 item">
					<h3>About</h3>
					<ul>
						<li><a href="#">Company</a></li>
						<li><a href="#">Team</a></li>
						<li><a href="#">Careers</a></li>
					</ul>
				</div>
				<div class="col-md-6 item text">
					<h3>Counselling-Web-App</h3>
					<p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
				</div>
				<div class="col item social"><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a></div>
			
			</div>
			<p class="copyright">Counselling-web-app © 2022</p>
		</div>
		</footer>
		</div>
  );
}



export default Footer;