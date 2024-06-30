import { ChangeEvent, forwardRef, useCallback } from 'react';

type PropsType = {
  onInput: (imageUrl: Url) => void;
};

const HiddenImageFileInput = forwardRef<HTMLInputElement | null, PropsType>(
  ({ onInput }, forwardedRef) => {
    const handleChange = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => {
          if (typeof reader.result === 'string') {
            onInput(reader.result);
          }
        };
        reader.readAsDataURL(file);
      },
      [onInput]
    );

    return (
      <input
        className='h-0 w-0 invisible'
        ref={forwardedRef}
        type='file'
        accept='image/*'
        onChange={handleChange}
        multiple={false}
      />
    );
  }
);

export default HiddenImageFileInput;
