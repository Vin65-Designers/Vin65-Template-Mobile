<cfoutput> <!DOCTYPE html>
<html>
<head>

	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">

	<cf_metaTags>
	
	<link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
    
	<cf_vin65GlobalAssets>
	
	<cf_css files="/assets/css/mobile.css">	
</head>
<body>

	<header class="v65-group">
		<div class="userTools v65-group">
			<a href="/Members/Edit-Profile" class="v65m-loginLink"><span>Members</span></a>
			<div class="v65m-cart"><cf_cart></div>
			<cf_customFile file="/v65html/_callUs.html">
		</div>
		<a href="/" class="logo"><img src="/assets/images/logo.png" alt="<cf_websiteName>"></a>
	</header>
	
	<nav>
		<cf_layoutHeaderNav>
	</nav>
	
	<section class="v65-group">
		<article class="content">
			<cf_mainContent>
		</article>
	</section>
		
	<footer>
		<div class="subNav"><cf_layoutSubMenu></div>		
		<cf_layoutFooterNav>
		<ul>
			<cf_customFile file="/v65html/_footerContact.html">
			<li><cf_standardSite></li>
		</ul>
		<p class="legal"><cf_copyright></p>
		<p class="author"><cf_vin65Accolade></p>
	</footer>

	<cf_js files="/assets/js/swipe.js,/assets/js/scripts.js">
		
	<cf_vin65GlobalFooterAssets>

</body>
</html> </cfoutput>
