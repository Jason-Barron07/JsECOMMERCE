let content = document.querySelector('body').innerHTML +=`

  <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><h1 class="head-text"><span>SN3</span>AKER <span>Com</span>plex </h1></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"><h4>Home</h4></a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="About.html"><h4>About</h4></a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="Products.html"><h4>Products</h4></a>
              </li>

              <li class="nav-item">
                <a class="nav-link active" href="Admin.html"><h4>Admin</h4></a>
              </li>
              
            </ul>

          </div>
        </div>

       
        
      </nav>

    <div>

<img src="https://i.postimg.cc/tRLNYT3R/landing-page.jpg" class="img-fluid w-50 h-50 rounded" alt="logo" id="landing-picture">


           <div class="landing-text">

        <h2>The <u> SN3AKER</u> shop thats always on <span>TOP!</span></h2>
</div>

    </div>

    <button type="button" class="btn button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Contact Us</button>

  <form action="https://formspree.io/f/xnqyrary" method="POST">

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">New message</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Name:</label>
            <input type="text" class="form-control" id="recipient-name">
          </div>
          <div class="mb-3">
          <label for="recipient-name" class="col-form-label">Surname:</label>
          <input type="text" class="form-control" id="recipient-name" name="surname">
        </div>
        <div class="mb-3">
        <label for="recipient-name" class="col-form-label">Gmail:</label>
        <input type="text" class="form-control" id="recipient-name">
      </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Message:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
      
        <button type="submit" class="btn btn-primary" >Send message</button>
      </div>
    </div>
  </div>
</div>


</form>

<footer>

<div class="footer-c">Gmail: CompanySneaker123@gmail.com <br> Phone: 089 782 6532 <br> &copy;Copyright 2023  </div>


</footer>

`