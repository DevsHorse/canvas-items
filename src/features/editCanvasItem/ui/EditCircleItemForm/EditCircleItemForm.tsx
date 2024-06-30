import { FC, useCallback } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { NumberFormField } from '../Form/NumberFormField';
import { Form } from '../Form';
import { CircleItemFormFields } from '../../model/types/CircleItemFormFields';
import { circleItemFormSchema } from '../../model/validation/circleItemFormSchema';
import { CircleItem } from '@/entities/canvasItem';
import { canvasActions } from '@/entities/canvas';
import { useAppDispatch } from '@/shared/hooks/reduxHooks';

type PropsType = {
  item: CircleItem;
};

const EditCircleItemForm: FC<PropsType> = ({ item }) => {
  const dispatch = useAppDispatch();

  const methods = useForm<CircleItemFormFields>({
    defaultValues: {
      x: item.x,
      y: item.y,
      radius: item.radius,
    },
    resolver: zodResolver(circleItemFormSchema),
  });

  const handleSave: SubmitHandler<CircleItemFormFields> = useCallback(
    (data) => {
      const newItem = { ...item, x: data.x, y: data.y, radius: data.radius };
      dispatch(canvasActions.updateCanvasItem(newItem));
    },
    [item, dispatch]
  );

  const handleDelete = useCallback(() => {
    dispatch(canvasActions.deleteCanvasItem(item.id));
  }, [dispatch, item.id]);

  return (
    <FormProvider {...methods}>
      <Form
        onSave={handleSave}
        onDelete={handleDelete}
        fieldsSlot={(isEdit) => (
          <>
            <NumberFormField label='X:' fieldName='x' disabled={!isEdit} />
            <NumberFormField label='Y:' fieldName='y' disabled={!isEdit} />
            <NumberFormField label='R:' fieldName='radius' disabled={!isEdit} />
          </>
        )}
      />
    </FormProvider>
  );
};

export default EditCircleItemForm;
