import './Home.css';

const Home=()=>{

return(<div className="img2">
  
<div class="slider-container">
      <div class="menu">
        <label for="slide-dot-1"></label>
        <label for="slide-dot-2"></label>
        <label for="slide-dot-3"></label>
        
      </div>
      <input id="slide-dot-1" type="radio" name="slides" checked/>
      <div class="slide slide-1"></div>
      <input id="slide-dot-2" type="radio" name="slides"/>
      <div class="slide slide-2"></div>
      <input id="slide-dot-3" type="radio" name="slides"/>
      <div class="slide slide-3"></div>
      
    </div>
   
</div>
)
}
export default Home;
