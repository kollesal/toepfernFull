export default function Clay() {
    return (
      <div>
        <div>
          <h1>Welcome</h1>
          <p>Not all of the clays can be considered, it needs to be fired at around 1250. But I will check on it!</p>
        </div>
  
        <div className="my-4">
          <h2 className="text-lg font-semibold p-4">Clays</h2>
          <video width="600" controls>
            <source src="/20241019_104601.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
  
        {/* Image Section */}
        <div className="my-4">
          <h3 className="text-lg font-semibold p-4">Photographs of clay</h3>
          <img 
            src="/20241019_104647.jpg" 
            alt="Team Photo" 
            width="600" 
            className="rounded-lg"
          />
        </div>
  
        <div className="my-4">
          <h3 className="text-lg font-semibold p-4">Photographs of clay</h3>
          <img 
            src="/20241019_104701.jpg" 
            alt="Team Photo" 
            width="600" 
            className="rounded-lg"
          />
        </div>
  
        <div className="my-4">
          <h3 className="text-lg font-semibold p-4">Photographs of clay</h3>
          <img 
            src="/20241019_104715.jpg" 
            alt="Team Photo" 
            width="600" 
            className="rounded-lg"
          />
        </div>
  
        <div className="my-4">
          <h3 className="text-lg font-semibold p-4">Even more clay (only 3rd row to consider)</h3>
          <img 
            src="/20241023_153341.jpg" 
            alt="Team Photo" 
            width="600" 
            className="rounded-lg"
          />
        </div>

        <p>I also use the Appollo Clay, which is on the white top ones the second.</p>
  
        <div className="my-4">
          <h3 className="text-lg font-semibold p-4">Absolute beauty</h3>
          <img 
            src="/20241019_114520.jpg" 
            alt="Team Photo" 
            width="600" 
            className="rounded-lg"
          />
        </div>
  
        <div className="my-4">
          <h3 className="text-lg font-semibold p-4">Maybe?</h3>
          <img 
            src="/20241019_114509.jpg" 
            alt="Team Photo" 
            width="600" 
            className="rounded-lg"
          />
        </div>
  
        <div className="my-4">
          <h3 className="text-lg font-semibold p-4">One I am using right now without grog</h3>
          <img 
            src="/20241019_114551.jpg" 
            alt="Team Photo" 
            width="600" 
            className="rounded-lg"
          />
        </div>
  
        <div className="my-4">
          <h3 className="text-lg font-semibold p-4">One I am using right now with more grog</h3>
          <img 
            src="/20241019_114557.jpg" 
            alt="Team Photo" 
            width="600" 
            className="rounded-lg"
          />
        </div>
      </div>
    );
  }
  