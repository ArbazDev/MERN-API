import React from 'react'

export default function Footer() {
    return (
        <footer class="site-footer">
            <div class="container mb-5">
                <div class="row">
                    <div class="col-sm-12 col-md-3">
                        <h6>FashionBazaar</h6>
                        <p class="text-justify">Home of CLothes. A place where you can find what you want!</p>
                    </div>

                <div class="col-xs-6 col-md-3">
                    <h6>Categories</h6>
                    <ul class="footer-links">
                    <li><a >C</a></li>
                    <li><a >UI Design</a></li>
                    <li><a >PHP</a></li>
                    <li><a >Java</a></li>
                    <li><a >Android</a></li>
                    <li><a >Templates</a></li>
                    </ul>
                </div>

                <div class="col-xs-6 col-md-3">
                    <h6>CONTACT</h6>
                    <ul class="footer-links">
                    <li><a >Islamabad, CUI, Park Road</a></li>
                    <li><a >info@fashionbazar.com</a></li>
                    <li><a >0331-7354555</a></li>
                    </ul>
                </div>

                <div class="col-xs-6 col-md-3">
                    <h6>USEFUL LINKS</h6>
                    <ul class="footer-links">
                    <li><a >Your Account</a></li>
                    <li><a >Sitemap</a></li>
                    <li><a >0331-7354555</a></li>
                    </ul>
                </div>
                </div>
               
            </div>
            <div class="container">
            <hr/>
                <div class="row mt-3">
                <div class="col-md-8 col-sm-6 col-xs-12">
                    <p class="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
                <a href="#" className="ml-3">FashionBazaar</a>.
                    </p>
                </div>

                <div class="col-md-4 col-sm-6 col-xs-12">
                    <ul class="social-icons">
                    <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                    <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
                    <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
                    </ul>
                </div>
                </div>
            </div>
    </footer>
    )
}
