import clsx from 'clsx'
import Styles from './Content.module.scss'
import { CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL } from 'next/dist/shared/lib/constants'
import {C200 , C200EvantGarfe , C300,E180,E200,ESQ,E300,Glc200,Glc300,GLS450,
    S450,S450lx,c200cu2018,c200cu2019,e200cu,e200dencu,glc200cu,c250,nhatrang, cantho,hoankiem} from '../../component/Img/Img.tsx'
const Content = ()=>{
   fetch("http://localhost:3000/posts")
   .then(response => response.json())
   .then(data => console.log(data))
    return(
        <div className={clsx(Styles.Content)}>

 <div className={clsx(Styles.dropdown)}>
 <a style={{textDecoration:'none', textAlign: 'center'}} href=''><h3>XE MERCEDES-BENZ NEW</h3></a>
  
  <div  className={clsx("row" , Styles.row1)}>
    <div className={clsx( 'col', Styles.customcol)}>
    <div  className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={C200} alt="Card image cap"/>
  <div className="card-body">
    <p className="card-text">Mercedes-Benz C200 | Mercedes Hà Nội</p>
    <a >1.599.000.000 VNĐ</a>
  </div>
</div>
    </div>
    <div className={clsx("col" , Styles.customcol)}>
    <div >
    <div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={C200EvantGarfe} alt="Card image cap"/>
  <div className="card-body">
    <p className="card-text">Mercedes-Benz C200 EvantGarde Plus | Mercedes Hà Nội</p>
    <a >1.849.000.000 VNĐ</a>
  </div>
</div>
    </div>
    
    </div>
    <div className={clsx("col" , Styles.customcol)}>
    <div >
    <div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={C300} alt="Card image cap"/>
  <div className="card-body">
    <p className="card-text">Mercedes-Benz C300 Plus | Mercedes Hà Nội</p>
    <a >2.099.000.000 VNĐ</a>
  </div>
</div>
    </div>
    
    </div>
    
</div>

{/* /* mercedes này  */ }
<div  className={clsx("row" , Styles.row1)}>
    <div className={clsx( 'col', Styles.customcol)}>
    <div  className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={E180} alt="Card image cap"/>
  <div className="card-body">
    <p className="card-text">Mercedes-Benz E180 | Mercedes Hà Nội</p>
    <a >2.159.000.000 VNĐ</a>
  </div>
</div>
    </div>
    <div className={clsx("col" , Styles.customcol)}>
    <div >
    <div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={E200} alt="Card image cap"/>
  <div className="card-body">
    <p className="card-text">Mercedes-Benz E200 Plus | Mercedes Hà Nội</p>
    <a >2.540.000.000 VNĐ</a>
  </div>
</div>
    </div>
    
    </div>
    <div className={clsx("col" , Styles.customcol)}>
    <div >
    <div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={ESQ} alt="Card image cap"/>
  <div className="card-body">
    <p className="card-text">Mercedes-Benz EQS Plus | Mercedes Hà Nội</p>
    <a >2.099.000.000 VNĐ</a>
  </div>
</div>
    </div>
    
    </div>
    
</div>
{/* mer gls */}
<div  className={clsx("row" , Styles.row1)}>
    <div className={clsx( 'col', Styles.customcol)}>
    <div  className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={E300} alt="Card image cap"/>
  <div className="card-body">
    <p className="card-text">Mercedes-Benz E300 | Mercedes Hà Nội</p>
    <a >3.029.000.000 VNĐ</a>
  </div>
</div>
    </div>
    <div className={clsx("col" , Styles.customcol)}>
    <div >
    <div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={Glc200} alt="Card image cap"/>
  <div className="card-body">
    <p className="card-text">Mercedes-Benz GlC200 Plus | Mercedes Hà Nội</p>
    <a>2.299.000.000 VNĐ</a>
  </div>
</div>
    </div>
    
    </div>
    <div className={clsx("col" , Styles.customcol)}>
    <div >
    <div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={Glc300} alt="Card image cap"/>
  <div className="card-body">
    <p className="card-text">Mercedes-Benz GLC300 Plus | Mercedes Hà Nội</p>
    <a >2.799.000.000 VNĐ</a>
  </div>
</div>
    </div>
    
    </div>
    
</div>
{/* S luxury */}
<div  className={clsx("row" , Styles.row1)}>
    <div className={clsx( 'col', Styles.customcol)}>
    <div  className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={S450lx} alt="Card image cap"/>
  <div className="card-body">
    <p className="card-text">Mercedes-Benz S450 Luxury | Mercedes Hà Nội</p>
    <a >5.599.000.000 VNĐ</a>
  </div>
</div>
    </div>
    <div className={clsx("col" , Styles.customcol)}>
    <div >
    <div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={GLS450} alt="Card image cap"/>
  <div className="card-body">
    <p className="card-text">Mercedes-Benz GLS450  | Mercedes Hà Nội</p>
    <a>5.249.000.000 VNĐ</a>
  </div>
</div>
    </div>
    
    </div>
    <div className={clsx("col" , Styles.customcol)}>
    <div >
    <div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={S450} alt="Card image cap"/>
  <div className="card-body">
    <p className="card-text">Mercedes-Benz S450 | Mercedes Hà Nội</p>
    <a >4.099.000.000 VNĐ</a>
  </div>
</div>
    </div>
    
    </div>
    
</div>

  </div>
  <div className={clsx(Styles.quasudung)}>
  <a style={{textDecoration:'none', textAlign: 'center'}} href=''><h3>XE CŨ ĐÃ QUA SỬ DỤNG</h3></a>
  <div>
  <div  className={clsx("row" , Styles.row1)}>
    <div className={clsx( 'col', Styles.customcol)}>
    <div  className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={c200cu2018} alt="Card image cap"/>
  <div className="card-body">
    <p className="card-text">[Xe Cũ]Mercedes-Benz C200 2018 | Mercedes Hà Nội</p>
    <a >1.319.000.000 VNĐ</a>
  </div>
</div>
    </div>
    <div className={clsx("col" , Styles.customcol)}>
    <div >
    <div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={c250} alt="Card image cap"/>
  <div className="card-body">
    <p className="card-text">[Xe Cũ]Mercedes-Benz C250 Exclusive 2018 | Mercedes Hà Nội</p>
    <a >1.319.000.000 VNĐ</a>
  </div>
</div>
    </div>
    
    </div>
    <div className={clsx("col" , Styles.customcol)}>
    <div >
    <div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={c200cu2019} alt="Card image cap"/>
  <div className="card-body">
    <p className="card-text">[Xe Cũ]Mercedes-Benz C200 2019  | Mercedes Hà Nội</p>
    <a >1.399.000.000 VNĐ</a>
  </div>
</div>
    </div>
    </div>
 

</div>
<div  className={clsx("row" , Styles.row1)}>
    <div className={clsx( 'col', Styles.customcol)}>
    <div  className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={e200dencu} alt="Card image cap"/>
  <div className="card-body">
    <p className="card-text">[Xe Cũ]Mercedes-Benz E200 2019 | Mercedes Hà Nội</p>
    <a >1.359.000.000 VNĐ</a>
  </div>
</div>
    </div>
    <div className={clsx("col" , Styles.customcol)}>
    <div >
    <div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={e200cu} alt="Card image cap"/>
  <div className="card-body">
    <p className="card-text">[Xe Cũ]Mercedes-Benz E200 2018  | Mercedes Hà Nội</p>
    <a >1.799.000.000 VNĐ</a>
  </div>
</div>
    </div>
    
    </div>
    <div className={clsx("col" , Styles.customcol)}>
    <div >
    <div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={glc200cu} alt="Card image cap"/>
  <div className="card-body">
    <p className="card-text">[Xe Cũ]Mercedes-Benz GLC 200 2019 | Mercedes Hà Nội</p>
    <a >1.619.000.000 VNĐ</a>
  </div>
</div>
    </div>
    
    </div>
    
</div>
  </div>
  </div>
  <div className={clsx(Styles.daili)}>
    <h2 style={{textAlign:'center'}}>Đại lí Mercedes</h2>
    <div  className={clsx("row" , Styles.row1)}>
    <div className={clsx( 'col', Styles.customcol)}>
    <div  className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={cantho} alt="Card image cap"/>
  <div className="card-body">
    <span><a href=''>Mercedes-Benz Haxaco Cần Thơ</a></span>
    <p className="card-text">Mercedes Hà Nội - 20/09/2022</p>
    <p>Mercedes-Benz Haxaco Cần Thơ là đại lý ủy quyền phân phối chính hãng các dòng xe của Mercedes-Benz Việt Nam tại Thành phố Cần Thơ, Đây là cơ sở mới...</p>
    <a href="#" className={clsx('btn btn-primary' ,Styles.xemchitiet )}>Xem chi tiết</a>
  </div>
</div>
    </div>
    <div className={clsx("col" , Styles.customcol)}>
    <div >
    <div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={hoankiem} alt="Card image cap"/>
  <div className="card-body">
    <span><a href=''>Mercedes-Benz Hoàn Kiếm</a></span>
    <p className="card-text">Mercedes Hà Nội - 08/09/2022</p>
    <p>Mercedes-Benz Vietnam Star Hoàn Kiếm là đại lý ủy quyền phân phối chính hãng các dòng xe của Mercedes-Benz Việt Nam tại Hà Nội, Đây là cơ sở được di...</p>
    <a href="#" className={clsx('btn btn-primary' ,Styles.xemchitiet )}>Xem chi tiết</a>
  </div>
</div>
    </div>
    
    </div>
    <div className={clsx("col" , Styles.customcol)}>
    <div >
    <div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={nhatrang} alt="Card image cap"/>
  <div className="card-body">
    <span><a href=''>Mercedes-Benz Nha Trang</a></span>
    <p>Mercedes Hà Nội - 10/07/2022</p>
    <p>Mercedes Nha Trang là đại lý ủy quyền phân phối chính hãng các dòng xe của Mercedes-Benz Việt Nam tại khu vực Nha Trang, là đơn vị trực thuộc của...</p>
      <a href="#" className={clsx('btn btn-primary' ,Styles.xemchitiet )}>Xem chi tiết</a>
  </div>
</div>
    </div>
    
    </div>
    
</div>
  </div>
</div>

    )
}
export default Content;
