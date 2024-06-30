import { FC, useCallback } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PointItemFormFields, pointItemFormSchema } from '../../model';
import { NumberFormField } from '../Form/NumberFormField';
import { Form } from '../Form';
import { PointItem } from '@/entities/canvasItem';
import { canvasActions } from '@/entities/canvas';
import { useAppDispatch } from '@/shared/hooks/reduxHooks';

type PropsType = {
  item: PointItem;
};

const EditPointItemForm: FC<PropsType> = ({ item }) => {
  const dispatch = useAppDispatch();

  const methods = useForm<PointItemFormFields>({
    defaultValues: { x: item.x, y: item.y },
    resolver: zodResolver(pointItemFormSchema),
  });

  const handleSave: SubmitHandler<PointItemFormFields> = useCallback(
    (data) => {
      const newItem = { ...item, x: data.x, y: data.y };
      dispatch(canvasActions.updateCanvasItem(newItem));
    },
    [dispatch, item]
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
          </>
        )}
      />
    </FormProvider>
  );
};

export default EditPointItemForm;
