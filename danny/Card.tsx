import React from 'react';
import Image from 'next/image';
import { CardProp } from '.';
import lockImage from './lock.svg';
const Card = ({ image, level, lock }: CardProp) => {
  return (
    <div
      className="flex items-center justify-center flex-col w-[300px] h-[295px] relative"
      style={{ border: '1px solid #DFE3E6', padding: '16px', cursor: 'pointer' }}
    >
      <Image src={image} width={171} height={171} alt="Badge Image" />
      <p style={{ fontSize: '22px', fontWeight: '600', lineHeight: '28px', textAlign: 'center' }}>{level}</p>
      <p
        style={{
          fontSize: '14px',
          lineHeight: '20px',
          fontWeight: '400',
          letterSpacing: '0.035',
          textAlign: 'center',
          marginTop: '10px',
          marginBottom: '5px',
        }}
      >
        Badge earned in the Product designed <br />
        category.
      </p>
      <small style={{ fontSize: '14px', fontWeight: '700', lineHeight: '20px', letterSpacing: '0.035px' }}>
        Earned on: Sept 12, 2023
      </small>
      {lock === true && (
        <div
          className="absolute  top-0 w-full flex "
          style={{ alignItems: 'center', justifyContent: 'center', inset: '0', backgroundColor: 'rgba(0, 0, 0, 0.60)' }}
        >
          <Image src={lockImage} alt="Lock__Image" height={138.699} width={138.699} />
        </div>
      )}
    </div>
  );
};

export default Card;
