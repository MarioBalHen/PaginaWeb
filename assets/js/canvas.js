var ctx=null, canvas=null;
        function iniciar()
        {
            canvas=document.getElementById('lienzoCanvas');
            ctx=canvas.getContext('2d');
            //Marco
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, 500, 40);
            ctx.fillRect(460, 0, 40, 500);
            ctx.fillRect(0, 460, 500, 40);
            ctx.fillRect(0, 0, 40, 500);
            ctx.lineWidth = 5;
            //Circulos Marco
            ctx.beginPath();
            ctx.arc(40, 40, 40, 0, 2 * Math.PI, true);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(460, 40, 40, 0, 2 * Math.PI, true);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(40, 460, 40, 0, 2 * Math.PI, true);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(460, 460, 40, 0, 2 * Math.PI, true);
            ctx.fill();

            //Alas
            ctx.beginPath();
            ctx.arc(115, 130, 22.5, 0, 2 * Math.PI, true);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(137, 175, 22.5, 0, 2 * Math.PI, true);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(160, 220, 22.5, 0, 2 * Math.PI, true);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(385, 130, 22.5, 0, 2 * Math.PI, true);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(362.5, 175, 22.5, 0, 2 * Math.PI, true);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(340, 220, 22.5, 0, 2 * Math.PI, true);
            ctx.fill();

            ctx.fillRect(115, 108, 270, 45);
            ctx.fillRect(137, 152.5, 225, 45);
            ctx.fillRect(160, 197, 180, 45);
            ctx.lineWidth = 5;

            //Aureola
            ctx.beginPath();
            ctx.fillStyle = "#F9B233";
            ctx.arc(250, 107, 90, 0, 2 * Math.PI, true);
            ctx.fill();

            //Cuerpo
            ctx.beginPath();
            ctx.fillStyle = "#10506F";
            ctx.arc(220, 360, 30, 0, (Math.PI/90) * 90);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(280, 360, 30, 0, (Math.PI/90) * 90);
            ctx.fill();

            ctx.fillStyle = "#36A9E1";
            ctx.fillRect(190, 213, 120, 147);

            ctx.beginPath();
            ctx.moveTo(250,150);
            ctx.lineTo(310,213);
            ctx.lineTo(190,213);
            ctx.lineTo(250,150);
            ctx.fill();

            ctx.fillStyle = "#10506F";
            ctx.fillRect(190, 213, 120, 36);

            //Cabeza
            ctx.beginPath();
            ctx.fillStyle = "#DEC8A0";
            ctx.arc(250, 133, 50, 0, 2 * Math.PI, true);
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = "#7D4E24";
            ctx.arc(207, 90, 17.5, 0, 2 * Math.PI, true);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(232.5, 69, 17.5, 0, 2 * Math.PI, true);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(229, 93, 21, 0, 2 * Math.PI, true);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(250, 80, 12, 0, 2 * Math.PI, true);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(293, 90, 17.5, 0, 2 * Math.PI, true);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(267.5, 69, 17.5, 0, 2 * Math.PI, true);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(271, 93, 21, 0, 2 * Math.PI, true);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(200, 114, 17.5, 300, (Math.PI/90) * 45);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(300, 114, 17.5, 89.5, (Math.PI/30) * 43.5);
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = "#000000";
            ctx.beginPath();
            ctx.arc(228,130,10,Math.PI,Math.PI*0,false); 
            ctx.fill();
            ctx.beginPath();
            ctx.arc(271,130,10,Math.PI,Math.PI*0,false); 
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = "#FFFFFF";
            ctx.arc(250, 145, 15, 0, (Math.PI/90) * 90);
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = "#DEC8A0";
            ctx.arc(200, 133, 10, 0, 2 * Math.PI, true);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(300, 133, 10, 0, 2 * Math.PI, true);
            ctx.fill();

            //Vela

            ctx.beginPath();
            ctx.fillStyle = "#F9B233";
            ctx.arc(250, 190, 22, 0, 2 * Math.PI, true);
            ctx.fill();

            ctx.fillStyle = "#FFFFFF";
            ctx.fillRect(244, 194, 12, 80);

            ctx.beginPath();
            ctx.fillStyle = "#DEC8A0";
            ctx.arc(250, 231, 18, 0, 2 * Math.PI, true);
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle="#E94E1B";
            ctx.arc(247, 187, 8, 300, (Math.PI/90) * 45);
            ctx.fill();
        
            //Texto
            ctx.font = 'Bold 30px Helvetica';
            ctx.textAlign = 'center';
            ctx.fillStyle = '#F9B233';
            ctx.fillText('FELICES FIESTAS', 250, 435);

        }
        window.addEventListener("load", iniciar, false);