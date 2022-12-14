import { ComponentPreview } from './ComponentPreview';
import { CanvasAttributes } from './types';

interface StoryWrapperProps {
  attributes: CanvasAttributes;
  component: React.FC<any>;
}

export default function StoryWrapper({
  attributes,
  component: Component,
}: StoryWrapperProps) {
  return (
    <ComponentPreview canvas={attributes.canvas} withSpacing>
      <Component {...(attributes.props || null)} />
    </ComponentPreview>
  );
}
