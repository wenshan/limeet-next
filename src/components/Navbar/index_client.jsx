'use client';
import Link from 'next/link';
import './index.less';

function NavLinkClient(props) {
  console.log('props:', props);
  if (!props || !props.name) {
    return false
  }
  return (
    <span href={`${props.path}/${props.value}`}>{props.name}</span>
  );
}

export default NavLinkClient;
