import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

export interface BasicEditorProps {
    /**
     * ClassName to be added to monaco dom element (dom container).
     * You can also set extraEditorClassName in options
     * and it will be added to the editor
     */
    className?: string;
    /**
     * Style to be added to monaco dom element (dom container).
     * Default height is '100%'.
     * Default width is '100%'.
     */
    style?: React.CSSProperties;
    /**
     * The theme used when the editor renders, defaults to 'vs'.
     * You can create custom themes via {@link monaco.editor.defineTheme}.
     * Refer to monaco type BuiltinTheme.
     * @see {@link  monaco.editor.BuiltinTheme}
     */
    theme?: monaco.editor.BuiltinTheme | string;
    /**
     * Language of model in MonacoEditor, defaults to 'sql'.
     */
    language?: string;
    /**
     * Sync value to model when value change if sync is true.
     */
    sync?: boolean;
    /**
     * An event emitted when the value of the modifiedEditor model has changed.
     */
    onChange?: (
        originValue: string,
        event: monaco.editor.IModelContentChangedEvent
    ) => any;
}

export interface MonacoEditorProps extends BasicEditorProps {
    /**
     * Value of model in editor.
     */
    value: string;
    /**
     * Options for monaco editor.
     * Refer to monaco interface IStandaloneEditorConstructionOptions.
     * @see {@link monaco.editor.IStandaloneEditorConstructionOptions}
     */
    options?: monaco.editor.IStandaloneEditorConstructionOptions;
    /**
     * Get editor instance.
     */
    editorInstanceRef?: (
        editorInstance: monaco.editor.IStandaloneCodeEditor
    ) => any;
    /**
     * An event emitted when the selection of the editor model has changed.
     */
    onCursorSelection?: (
        selectionContent: string,
        event: monaco.editor.ICursorSelectionChangedEvent
    ) => any;
    /**
     * An event emitted when the editor is in focus.
     */
    onFocus?: (value: string) => any;
    /**
     * An event emitted when the editor is out of focus.
     */
    onBlur?: (value: string) => any;
}

export interface MonacoDiffEditorProps extends BasicEditorProps {
    /**
     * Value of model in modifiedEditor.
     */
    value: string;
    /**
     * Value of model in originalEditor.
     */
    original: string;

    /**
     * Options for monaco diff editor.
     * Refer to monaco interface IStandaloneEditorConstructionOptions.
     * @see {@link monaco.editor.IStandaloneDiffEditorConstructionOptions}
     */
    options?: monaco.editor.IStandaloneDiffEditorConstructionOptions;
    /**
     * Get diff editor instance.
     */
    diffEditorInstanceRef?: (
        diffEditorInstance: monaco.editor.IStandaloneDiffEditor
    ) => void;
    /**
     * Is modified editor readonly.
     */
    readOnly?: boolean;
}
