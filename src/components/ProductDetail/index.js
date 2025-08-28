import { Container, Image } from 'react-bootstrap';
import './index.less';
function ProductDetail({ productDetail }) {
  const { lifestyle_image_link } = productDetail;
  if (!lifestyle_image_link || !lifestyle_image_link[0]) {
    return;
  }
  const imgList = () => {
    const html = [];
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    lifestyle_image_link &&
      lifestyle_image_link.length &&
      lifestyle_image_link.map((item, idx) => {
        html.push(<Image src={item} fluid key={idx} />);
      });
    return html;
  };
  return <Container className='product-detail-img-list'>{imgList()}</Container>;
}

export default ProductDetail;
