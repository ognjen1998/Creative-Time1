const icons = document.getElementsByClassName('skills__icon');
const projects = document.getElementById('projects');

const header = document.getElementById('header');
const footer = document.getElementById('footer');
const main = document.getElementById('main');
const loading = document.getElementById('loading');
document.body.style.overflowY = 'hidden';
header.style.opacity = '0';
main.style.opacity = '0';
footer.style.opacity = '0';

window.onbeforeunload = () => {
	document.documentElement.scrollTop = 0;
};

// Animations
document.onscroll = () => {
	if (window.scrollY > 600) {
		for (let i = 0; i < icons.length; i++) {
			icons[i].style.animation = 'brush 1s';
			setTimeout(() => {
				icons[i].style.animation = 'none';
			}, 1000);
		}
	}
	if (window.scrollY > 1300) {
		projects.style.animation = "projects cubic-bezier(.51,.21,.69,1.5) 1s forwards";
	}
};

for (let i = 0; i < icons.length; i++) {
	icons[i].onmouseover = e => {
		icons[i].style.animation = 'brush 1s';
		setTimeout(() => {
			icons[i].style.animation = 'none';
		}, 1000);
	};
}
