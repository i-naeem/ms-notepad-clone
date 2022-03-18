import { DropdownItem } from '../../styles/DropdownItem';
import { useEditor } from '../../context/EditorContext';
import { Dropdown } from '../../styles/Dropdown';

export const FileNavbarItem = (props) => {
  const { reset } = useEditor();

  return (
    <Dropdown label="File">
      <DropdownItem label="New" shortcut="Ctrl + N" onClick={reset} />
      <DropdownItem
        as={'a'}
        target="_blank"
        label="New Tab"
        shortcut="Ctrl + Shit + N"
        href={process.env.PUBLIC_URL}
      />
      <DropdownItem as="label">
        Open
        <input type="file" accept=".txt" hidden="true" />
        <kbd>Ctrl + N</kbd>
      </DropdownItem>
      <DropdownItem label="Save" shortcut="Ctrl + S" />
      <DropdownItem label="Save as..." shortcut="Ctrl + Shit + S" />
    </Dropdown>
  );
};
