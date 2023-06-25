import React from 'react'

const ProductItems = ({item,index,onchange,isChecked}) => {
  return (
    <>
      <label htmlFor={`checkbox-${index+1}`} >
        <input type="checkbox" name="" id={`checkbox-${index+1}`} className='checkbox-input' value={item} onChange={onchange} checked={isChecked} hidden />
        <h6 className={'product-item-c'}>{index+1} {item}</h6>
      </label>
      
    </>
  )
}

export default ProductItems
