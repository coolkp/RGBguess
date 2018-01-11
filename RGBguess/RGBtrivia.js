var buttons = document.getElementsByTagName("button");

var clicked = false;
var click_index = 2;
var toggle = [false,false,true];
var correct = document.getElementById("right");
var max = 5;
var ans = "abs";
var squares = document.getElementsByClassName("square");
var wrong_click = 0 ;
var wrong = document.getElementById("wrong");
var square_hid = [false,false,false,false,false,false];
var game_end = false;
var easy = buttons[1];
var hard = buttons[2];
function init( )
{
	buttons[0].innerText = "NEW COLORS";

	
	if(game_end)
	{
		correct.classList.toggle("visible");
	}
	game_end = false;
	if(wrong_click>0)
	{
		correct.classList.toggle("visible");
	}
	
	wrong_click = 0 ;
	var red = Math.floor((Math.random() * 255) + 1);
	var blue = Math.floor((Math.random() * 255) + 1);
	var green = Math.floor((Math.random() * 255) + 1);
	var rgb = "RGB (" + red + ", " + blue + ", " + green + ")";
	var css =  "rgb(" + red + ", " + blue + ", " + green + ")";
	ans = css;
	document.getElementById("RGB").innerHTML = rgb;
	var rand = Math.floor((Math.random() * max) + 1);
	
	squares[rand].style.backgroundColor = css;
	for(var i = 0; i<squares.length;i++)
	{
		
		if(square_hid[i] && i<=max)
		{
			squares[i].classList.toggle("hidden");
			square_hid[i] = false;
		}
		else if (square_hid[i]==false && i>max)
		{
			squares[i].classList.toggle("hidden");
			square_hid[i] = true;
		}

		red = Math.floor((Math.random() * 255) + 1);
		blue = Math.floor((Math.random() * 255) + 1);
		green = Math.floor((Math.random() * 255) + 1);
		css = "rgb(" + red + ", " + blue + ", " + green + ")";
		if(i!=rand)
			{
			 	squares[i].style.backgroundColor = css;
			}
		
	}
	if (max == 5)
	{
		square_hid = [false,false,false,false,false,false];
	}
	else
	{
		square_hid = [false,false,false,true,true,true];
	}

}


init();
buttons[0].addEventListener("click",function()
	{
		init();
	});
for(var i = 0; i<squares.length; i++)
{
	squares[i].addEventListener("click",function()
	{
		if(this.style.backgroundColor == ans)
		{
			if(game_end)
			{
				return;
			}
			correct.innerText = "Correct!";
			if(wrong_click==0)
			{
				correct.classList.toggle("visible");
			}
			var s = this.style;
			for(var j = 0; j<square_hid.length&&j<=max; j ++)
			{
				squares[j].style.backgroundColor = ans;
				if(square_hid[j])
				{
					squares[j].classList.toggle("hidden");
					square_hid[j] = false;
				}
			}
			wrong_click = 0;
			game_end = true;
			buttons[0].innerText = "PLAY AGAIN ?";
		}
		else
		{
			//correct.classList.toggle("wrong");
			correct.innerText = "Try Again!";
			if(wrong_click == 0)
			{

				correct.classList.toggle("visible");
			}
			this.classList.toggle("hidden");
			for(var j = 0; j<squares.length; j ++)
			{
				if(squares[j] == this)
				{
					square_hid[j] = true;
					break;
				}
			}
			wrong_click++;
		}
	});
}

for (var i = 0; i<buttons.length; i++)
{
	buttons[i].addEventListener("mouseover",function ()
		{
			//if(buttons[click_index]!=this)
			{
				this.classList.toggle("hoverclass");
			}
			
		}
	);

	buttons[i].addEventListener("mouseout",function ()
			{

				//if(buttons[click_index]!=this)
				{
					this.classList.toggle("hoverclass");
				}

			}

	);
	if(i>0)
	{
		buttons[i].addEventListener("click",function()
			{

				
				for(var j=0;j<buttons.length;j++)
				{
					if(this!=buttons[j])
					{
						/*buttons[j].style.backgroundColor = "white";
						buttons[j].style.color = "steelblue";*/
						if(toggle[j] == true)
						{
							buttons[j].classList.toggle("hoverclass");
							var temp = toggle[j];
						 	toggle[j] = !temp;
						}
					}
					else
						{
						 click_index = j;
						 var temp = toggle[j];
						 toggle[j] = !temp;
						}
					
				}
				if(buttons[1]==this)
				{
					max = 2;
					init();
					//wrong_click = 0;
					//game_end = false;
					/*for(var k = 2; k<6; k++)
					{
						if (square_hid[k]==false)
						{
							squares[k].style.visibility = "hidden";
							square_hid[k] = true;
						}

					}*/
				}
				else
				{
					max = 5;
					init();
					//game_end = false;
					/*for(var k = 2; k<6; k++)
					{

					}*/
				}

				this.classList.toggle("hoverclass");
				clicked = true;
				
				
			}
		);
	}
}