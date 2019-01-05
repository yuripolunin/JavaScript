var tlr = document.getElementById('top-left-r'),
		trr = document.getElementById('top-right-r'),
		blr = document.getElementById('bottom-left-r'),
		brr = document.getElementById('bottom-right-r'),
		tlt = document.getElementById('top-left'),
		trt = document.getElementById('top-right'),
		blt = document.getElementById('bottom-left'),
		brt = document.getElementById('bottom-right'),
		output = document.getElementById('output'),
		output_text = document.getElementById('output_text');


		function edit() {


			tlt.value = tlr.value + ' px';
			trt.value = trr.value + ' px';
			blt.value = blr.value + ' px';
			brt.value = brr.value + ' px';







			output.style.borderRadius = tlr.value + 'px ' + trr.value + 'px ' + brr.value + 'px ' + blr.value + 'px';

			output_text.style.display = 'inline-block';

			output_text.innerHTML = '{ ' + '<br>' + '/*yuri polunin css generator*/' + '<br>' + 'border-radius:' + ' ' + tlr.value + 'px ' + 
			trr.value + 'px ' + brr.value + 'px ' + blr.value + 'px;' + '<br>' + ' }'



		}