function loadEvent(){
    

    function pageLoad(){

        let rootElement = document.getElementById("root");
        rootElement.insertAdjacentHTML("afterbegin", `
        <section id="container1">
                <nav>
                    <a href="">types of cyberbullying</a>
                    <a href="">about the project</a>
                    <a href="">faq</a>
                    <button class="button1">en</button>
                    <button class="button2">pt</button>
                </nav>
            <div id="main">
                <div class="imgp">
                    <img src="load.gif">
                    <p>
                        <font color=aqua>WHATSAPP</font> IS A FREE ZONE FOR CYBERBULLYING,<br>
                        BUT NOW YOU CAN STOP IT.<br>
                        BY LAW, MOBILE OPERATORS CAN BREAK THE BULLY'S<br>
                        CONTRACT. SO IF YOU ARE A VICTIM, <font color="aqua">REPORT IT.</font><br>
                        KNOW SOMEONE BEING BULLIED, <font color="aqua">SHARE IT!</font><br>
                        BULLIES DON'T HAVE A SAFE PLACE ANYMORE.<br>
                    </p>
                    <p class="p2">
                        BULLIES DON'T HAVE A SAFE PLACE ANYMORE.<br>
                    </p>
                </div>
                <div class="form">
                    <form>
                        <h3>Report a Cyberbullying here:</h3>
                        <input placeholder="your full name" type="text" required>
                        <input placeholder="your whatsapp number" type="text" title="Please add a valid number so we can reach you!" required>
                        <input placeholder="your e-mail" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required>
                        <input placeholder="describe the abuse you suffered" type="textarea" style="height: 100px;" maxlenght="1000" required>
                        <h4>Abuser's information</h4>
                        <input placeholder="abuser's phone number" type="text" title="Please add a valid number so we can reach you!" required>
                        <label for="chooseFile">Please, share some evidence of the abuse <br> so we can help you better!</label>
                        <input type="file" name="chooseFile" id="chooseFile">			  
                        <!-- <p>Please, share some evidence of the abuse so we can help you better!</p>
                        <input type="file" placeholder="Max 10MB"> -->
                        <button>Report the abuse</button>
                    </form>
                </div>
            </div>	
            <div class="aniarrow">
                <img class="arrow" src="white-down-arrow-png-2.png" />
            </div>
        </section>

        <section id="exclusion">

            <div class="top-elements">
                <h4>Types of cyber _bullying</h4>
                <h1>_01</h1>
            </div>

            <div class="floater">
                <h1>EX<span>&#183;</span>CLU <span>&#183;</span>SION</h1>
                <p>THE DELIBERATE ACT OF LEAVING SOMEONE OUT. MAIN CASES: EXCLUDED FROM FRIENDS' PARTIES, ACTIVITIES, CONVERSATION.</p>
            </div>

            <footer>
                <a id="report" href="https://termsagainstbullying.com/#home">REPORT ABUSE_</a>
                
                <div class="socials">
                    <p2>_SHARE IT</p2>
                    <a href="#" class="fa fa-twitter"></a>
                    <a href="#" class="fa fa-facebook"></a>
                    <a href="#" class="fa fa-whatsapp"></a>
                </div>
            </footer>

        </section>
        `)
    }
    pageLoad();
}
window.addEventListener("load", loadEvent);