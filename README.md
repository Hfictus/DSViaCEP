# DSViaCEP<br>

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/Hfictus/DSViaCEP/blob/main/LICENSE) 

### Este projeto é uma aplicação web, Front-end, criada ao longo do curso de nivelamento em JavaScript, oferecido pela escola de programação DevSuperior. Nele, implementa-se um nível básico de responsividade, além de serem exercitados conceitos relacionados a módulos, bem como criados eventos e exceções.<br>
### Tecnologias usadas:<br>
HTML5<br>
CSS3<br>
JavaScript<br>
ViaCEP API<br>

### Funcionamento<br>
Layout web:<br>
![Web 1]( https://github.com/Hfictus/images/blob/main/DSViaCepWeb1.webp)<br>
<br>
Colocando-se um CEP válido e um número:<br>
Ao se colocar o CEP válido e se sair do seu campo, aparecem logradouro e cidade no segundo e no quarto. Em seguida, pode-se digitar um número no terceiro campo.<br>
![Web 2]( https://github.com/Hfictus/images/blob/main/DSViaCepWeb2.webp)<br>
<br>
Ao se clicar em Salvar, aparece um card com as informações dos campos toda vez que se realiza esse processo sem erros, sendo limpo o formulário:<br>
![Web 3]( https://github.com/Hfictus/images/blob/main/DSViaCepWeb3.webp)<br>
<br>
Se se digita um CEP inválido e se tenta mudar para o próximo campo, aparece uma mensagem abaixo do campo:<br>
![FormCEP 1]( https://github.com/Hfictus/images/blob/main/DSViaCepFormCep1.webp)<br>
<br>
Se o número de CEP estiver errado, ou o campo estiver vazio, ao se clicar em Salvar, aparece a seguinte mensagem:<br>
![FormCEP 2]( https://github.com/Hfictus/images/blob/main/DSViaCepFormCep2.webp)<br>
Essa mesma mensagem aparece sob o campo de número se ele estiver vazio ao se clicar em Salvar.<br>
Obs.: os campos de logradouro e cidade são automaticamente preenchidos pela API ViaCep ao se digitar um CEP correto e se sair de seu campo.<br>
<br>
Layout Web com modal:<br>
Ao se clicar no link “contato” no lado direito do cabeçalho, aparece um modal com informação de contato e o botão Fechar. O fundo da página fica esmaecido.<br> 
![Web 4]( https://github.com/Hfictus/images/blob/main/DSViaCepWeb4.webp)<br>
O modal fecha ao se clicar no botão Fechar, ou ao se clicar com a seta do mouse fora da caixa centralizada.<br>
<br>
 
Layout Tablet e Mobile:<br>
<img src="https://github.com/Hfictus/images/blob/main/DSViaCepTablet.webp">
<img src="https://github.com/Hfictus/images/blob/main/DSViaCepMobile.webp" style="width: 150px; height: 280px;">
