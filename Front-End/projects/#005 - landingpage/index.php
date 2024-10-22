<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="description" content="Landing Page">
    <meta name="keywords" content="HTML,CSS,Landing Page">
    <meta name="author" content="Thiago Torres">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Landing page Cena</title>
</head>

<body>
    <header>
        <div class="container">
            <div class="img01">
                <img src="imagens/logo1.png" alt="">
            </div><!-- logo left -->
            <div class="img02">
                <img src="imagens/logo2.png" alt="">
            </div><!-- logo right -->
            <div class="clear"></div>
        </div><!-- container -->
    </header> <!-- header -->

    <div class="container">
        <div class="banner-form">
            <div class="banner">
                <div class="form-container">
                    <h2>PODE ACREDITAR, POR DENTRO É AINDA MAIS BONITO.</h2>
                    <form action="GET">
                        <label for="name">*Nome completo:</label>
                        <input type="text" name="name" id="name" placeholder="Digite o seu Nome">
                        <label for="email">*E-mail:</label>
                        <input type="email" name="email" id="email" placeholder="Digite o seu E-mail">
                        <label for="number">*Fone:</label>
                        <input type="tel" name="number" id="number" placeholder="Digite o seu Telefone">

                        <input type="submit" class="btn" value="ENVIAR">

                        <p>* Campos obrigatórios</p>
                    </form>
                </div>
            </div>
        </div>
    </div>
</body>

</html>