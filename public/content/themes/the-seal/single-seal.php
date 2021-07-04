<?php get_header();?>


<?php
the_post();


$image = get_field('background');
$imageURL = $image['url'];

$size = get_field('size');
$rotationSpeed = get_field('rotation-speed');
$oscillationSpeed = get_field('oscillation-speed');

$colorChange =  get_field('sunburn');
$crownColor =  get_field('crown-color');

$borderColor =  get_field('border-color');
$borderSize =  get_field('border-size');

$textColor = get_field('text-color');

$gearSize =  get_field('gear-size');
$gearBorder =  get_field('gear-border');

?>



<article class="the-seal">
    <h1 class="the-seal__title"><?=get_the_title();?></h1>
    <img src="<?=$imageURL?>"  class="the-seal__image" style="display: none"/>

    <input class="the-seal__size" value="<?=$size;?>"/>
    
    <input class="the-seal__gear-size" value="<?=$gearSize;?>"/>
    <input class="the-seal__gear-border" value="<?=$gearBorder;?>"/>

    <input class="the-seal__rotation-speed" value="<?=$rotationSpeed;?>"/>
    <input class="the-seal__oscillation-speed" value="<?=$oscillationSpeed;?>"/>

    <input class="the-seal__rotation-speed" value="<?=$rotationSpeed;?>"/>
    <input class="the-seal__sunburn" value="<?=$colorChange;?>"/>
    <input class="the-seal__crown-color" value="<?=$crownColor;?>"/>
    
    <input class="the-seal__border-color" value="<?=$borderColor;?>"/>
    <input class="the-seal__border-size" value="<?=$borderSize;?>"/>


    <input class="the-seal__text-color" value="<?=$textColor;?>"/>
    
    
    
    

</article>


<?php get_footer();?>