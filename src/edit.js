/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import {
	Panel,
	PanelBody,
	PanelRow,
	SelectControl,
} from "@wordpress/components";

// 1 Way to create a new instance of the Component
// import ServerSideRender from "@wordpress/server-side-render";

import { useEntityRecords } from "@wordpress/core-data";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { records, hasResolved } = useEntityRecords("root", "user", {
		per_page: 12,
		roles: attributes.role,
	});
	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<Panel>
					<PanelBody title={__("Settings", "wpnavas")}>
						<PanelRow>
							<SelectControl
								label={__("User Role", "wpnavas")}
								value={attributes.role}
								options={[
									{
										label: __("Contributor", "wpnavas"),
										value: "contribuitor",
									},
									{ label: __("Author", "wpnavas"), value: "author" },
									{ label: __("Editor", "wpnavas"), value: "editor" },
									{
										label: __("Administrator", "wpnavas"),
										value: "administrator",
									},
								]}
								onChange={(role) => setAttributes({ role })}
							/>
						</PanelRow>
					</PanelBody>
				</Panel>
			</InspectorControls>
			{records && hasResolved &&()}

			{/* <ServerSideRender
				block="wpnavas/example-dynamic-block"
				attributes={attributes}
			/> */}
		</div>
	);
}
