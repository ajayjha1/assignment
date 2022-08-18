import './App.css';
import Navbar from './Navbar';

function App() {
  return (
    
    <div className="background">
      <Navbar />;

      <div className='grey-part'>
        <svg width="1440" height="1248" viewBox="0 0 1440 1248" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-8 180.882V1248H1439.91V0L1389.12 180.882L1340.07 65.8835L1194.43 255.572L1034.14 0L959.998 180.882L793.605 65.8835V211.282L747.482 194.621L719.458 302.913L679.173 115.864L604.443 211.282L588.095 65.8835L477.97 255.572L207.435 229.456L121.611 115.864L70.8177 271.864L-8 180.882Z" fill="#040404" fill-opacity="0.25"/>
        </svg>
      </div>
      <div className='black-part'>
        <svg width="737" height="1400" viewBox="0 0 737 1400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M49.9374 92.9748L-1 194.619V232.287V1400H737V155.942L677.178 111.176L617.949 155.942L582.411 68.3783L506.597 92.9748L395.246 141.676L213.411 0L152.404 68.3783L118.644 121.999L49.9374 92.9748Z" fill="black"/>
        </svg>
      </div>
      <div className='hr'></div>
      <div className='green-part'>
        <svg width="703" height="1340" viewBox="0 0 703 1340" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M562.829 10.4606L615.719 155.102L675.096 125.527L721 202.935V1340H0V95.5233L53.356 32.4976L123.238 60.0714L175.136 47.2693V0L364.049 73.3659L418.13 32.4976L457.049 60.0714L562.829 10.4606Z" fill="#3DBA41"/>
        </svg>
      </div>
      
    </div>
  );
}

export default App;
