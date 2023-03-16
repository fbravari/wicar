<section class="faq py-4 py-md-5">
    <div class="container">
        <h1 class="text-orange font-weight-bold mb-5">Revisa aquí nuestras preguntas frecuentes</h1>
        <div class="row">
            <div class="col-12">
                <div class="accordion accordion-faq" id="wicar-faq">
                    <?php 
                    $counter = 1;
                    for ($i=1; $i<=10; $i++) { ?>
                        <div class="accordion-item">
                          <h2 class="accordion-header mb-0">
                            <button class="accordion-button collapsed" type="button" data-toggle="collapse" data-target="#faq-<?php echo $counter; ?>" aria-expanded="true" aria-controls="faq-<?php echo $counter; ?>">
                              ¿Qué es Wicar?
                            </button>
                          </h2>
                          <div id="faq-<?php echo $counter; ?>" class="accordion-collapse collapse" data-parent="#wicar-faq">
                            <div class="accordion-body">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero placeat id distinctio pariatur numquam temporibus minus culpa laboriosam commodi facilis. Assumenda reiciendis explicabo aspernatur ex omnis amet odio magni dolores.
                            </div>
                          </div>
                        </div>
                    <?php 
                    $counter++;
                    }
                    ?>
                </div>
            </div>
        </div>
    </div>
</section>