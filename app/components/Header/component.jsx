/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  const { isNotification, userName } = props;

  return (
    <header className="govuk-header " role="banner" data-module="govuk-header">
      <div className="govuk-header__container govuk-width-container">
        <div className="govuk-header__logo">
          <a href="/" className="govuk-header govuk-header--homepage">
            <span className="govuk-header__logotype">
              <svg role="presentation" focusable="false" className="govuk-header__logotype-crown" width="92" height="58" xmlns="http://www.w3.org/2000/svg">
                <g fill="#FFF" fillRule="nonzero">
                  <path d="M71.498 37.013V22.67c.44-.038.862-.038 1.277-.114.572-.1 1.007-.427 1.315-.93.05-.089.214-.152.32-.152 1.07-.012 2.14-.006 3.21-.006h11.236c-.34 4.077-1.894 7.606-4.794 10.457-3.454 3.403-7.632 5.165-12.564 5.09zM70.145 37.02c-1.088 0-2.114.006-3.14-.007-.094 0-.213-.113-.264-.2a248.074 248.074 0 0 1-1.793-3.096c-.12-.214-.258-.302-.516-.302-3.07.012-6.14.012-9.217 0-.252 0-.371.088-.484.295a215.344 215.344 0 0 1-1.787 3.064c-.05.082-.157.183-.246.183-.975.012-1.95.006-2.982.006.202-.346.378-.66.566-.969 2.416-4.001 4.839-8.003 7.261-12.004.252-.41.49-.83.761-1.227a.459.459 0 0 1 .315-.176c.868-.013 1.743-.006 2.61-.013.177 0 .284.057.372.214 2.366 3.958 4.738 7.915 7.11 11.872.478.762.937 1.53 1.434 2.36zm-6.323-5.354c-1.34-2.347-2.655-4.65-3.983-6.984-1.333 2.34-2.648 4.65-3.982 6.984h7.965zM39.706 37.045h-3.045V22.599h.371c1.9.007 3.794-.018 5.694.02 1.636.037 3.26.194 4.776.893 2.044.943 2.875 3.315 1.868 5.29-.44.87-1.195 1.379-2.063 1.744-1.026.421-2.102.623-3.203.686-1.359.069-2.724.075-4.083.113-.095 0-.183.006-.308.012-.007 1.894-.007 3.775-.007 5.688zm-.031-7.65c1.176 0 2.321.03 3.46-.013.749-.025 1.498-.158 2.19-.485.736-.346 1.195-.893 1.258-1.73.07-.887-.333-1.504-1.095-1.919-.692-.377-1.447-.566-2.214-.616-1.108-.076-2.215-.088-3.322-.126-.088 0-.183.012-.27.019-.007 1.654-.007 3.278-.007 4.87zM28.67 28.652v1.881h-7.738v4.656h8.494v1.881h-11.52V22.618H29.4v1.875h-8.494v4.159h7.764zM.34 36.68l.226-1.906c.598.176 1.17.39 1.756.503 1.673.315 3.347.415 4.976-.208a3.132 3.132 0 0 0 1.095-.698c.786-.786.642-1.9-.296-2.605-.723-.54-1.579-.799-2.416-1.1-1.157-.416-2.328-.812-3.454-1.29-.811-.347-1.497-.894-1.887-1.724-.66-1.403-.145-3.083 1.233-4.02 1.032-.7 2.196-1.02 3.416-1.133 2.322-.22 3.574-.126 5.996.346-.126.68-.252 1.359-.377 2.045-.554-.145-1.076-.315-1.617-.41-1.366-.226-2.737-.39-4.109-.037-.516.132-.987.346-1.34.761-.484.573-.478 1.265.025 1.818.541.592 1.278.862 2.001 1.127 1.177.434 2.372.799 3.523 1.283.648.27 1.271.66 1.812 1.101 1.617 1.321 1.24 3.82.076 4.97-.8.787-1.78 1.215-2.844 1.435-2.535.535-5.071.44-7.594-.164-.05-.012-.1-.025-.15-.044-.007-.006-.02-.025-.051-.05zM71.504 8.26V5.405c3.781.208 7.116 1.46 9.91 4.027 3.101 2.85 4.649 6.449 4.995 10.627h-2.926c-.138-.642-.245-1.29-.415-1.92-.654-2.49-1.768-4.737-3.637-6.561a10.482 10.482 0 0 0-4.73-2.668c-1.026-.277-2.096-.428-3.197-.648zM70.252 17.182c0 .925.006 1.869-.013 2.813 0 .081-.125.195-.213.232-1.737.693-3.404.485-5.059-.314a18.252 18.252 0 0 0-2.53-1.007c-1.176-.365-2.308-.094-3.397.434-.767.372-1.541.762-2.346 1.02-1.196.377-2.423.239-3.618-.095-.07-.019-.17-.113-.17-.176-.013-1-.006-2.007-.006-3.001.54.107 1.013.214 1.497.296 1.17.201 2.265-.082 3.316-.58.9-.427 1.818-.792 2.806-.95 1.56-.25 3.026.007 4.373.825 1.006.61 2.07.975 3.246.868.698-.056 1.39-.233 2.114-.365zM52.9 5.373c.793.113 1.522.252 2.258.302.818.057 1.586-.208 2.335-.51.862-.346 1.711-.742 2.604-.969 1.68-.427 3.329-.207 4.8.711 1.63 1.02 3.31 1.108 5.078.529.076-.025.157-.044.258-.07.006.095.019.177.019.259 0 .83-.013 1.654.006 2.485.007.239-.088.308-.295.384-1.787.692-3.48.409-5.147-.422a18.488 18.488 0 0 0-1.963-.824c-1.214-.428-2.403-.32-3.561.239-.654.32-1.302.667-1.982.937-1.397.554-2.825.472-4.247.07-.069-.02-.163-.139-.163-.208-.007-.988 0-1.97 0-2.913zM70.24 11.3c.006.075.012.157.012.239 0 .83-.006 1.654.006 2.485.007.214-.05.315-.264.377-.824.233-1.655.529-2.523.39-.66-.106-1.315-.308-1.95-.54-.774-.284-1.51-.661-2.278-.97-1.39-.56-2.75-.452-4.09.22-.735.372-1.478.743-2.258 1.001-1.277.428-2.56.296-3.794-.233-.088-.037-.201-.17-.201-.258-.013-.918-.007-1.837-.007-2.78.516.113.976.226 1.441.308 1.22.207 2.366-.025 3.473-.56.931-.453 1.894-.824 2.932-.963 1.542-.207 2.995.05 4.304.875 1.547.969 3.158 1.032 4.844.49.088-.031.176-.062.27-.088.02-.006.045.007.082.007z" /><path d="M80.268 20.058h-3.007c-.019-1.598-.755-2.87-1.768-4.027-1.044-1.195-2.39-1.718-3.976-1.75v-2.956c4.41-.082 8.374 3.624 8.751 8.733zM58.795 48.011h-.724c-.006-.113-.012-.226-.012-.333V45.38c0-.144.019-.308-.025-.434-.063-.163-.151-.377-.29-.428-.15-.056-.402-.006-.54.088-.366.258-.504.674-.542 1.095-.056.617-.044 1.233-.063 1.85-.006.145 0 .29 0 .46h-.723a5.05 5.05 0 0 1-.013-.31c-.006-.867-.006-1.742-.019-2.61-.006-.258-.038-.522-.333-.61-.302-.088-.529.069-.699.302-.308.434-.396.943-.409 1.46-.012.584-.006 1.17-.006 1.767h-.736v-4.096h.711v.61c.333-.358.642-.691 1.164-.71.554-.02.862.295 1.05.774.17-.19.309-.378.485-.523.34-.289.743-.333 1.151-.17.384.151.56.485.567.875.019 1.063.006 2.133.006 3.24zM51.453 56.184c1.768.68 2.328.346 2.24-1.24-.227.126-.44.309-.686.378a1.247 1.247 0 0 1-1.491-.642c-.453-.88-.46-1.793-.095-2.705.353-.868 1.573-1.177 2.253-.29.019-.15.031-.276.05-.421h.71c.007.107.02.208.02.308 0 1.246.006 2.498-.006 3.744 0 .277-.038.566-.12.83-.214.68-.761.957-1.416 1-.402.026-.811-.037-1.22-.069-.17-.012-.258-.107-.252-.289.019-.195.013-.384.013-.604zm2.346-2.932c-.144-.434-.226-.874-.434-1.246-.276-.484-.868-.453-1.1.038-.378.787-.372 1.61 0 2.397.245.51.855.535 1.12.032.188-.359.27-.787.414-1.22zM50.937 55.328c-.05.02-.057.025-.07.025-.742.07-.742.07-.975-.629a16.856 16.856 0 0 1-.302-.956c-.05-.17-.132-.233-.308-.226-.522.012-1.05.012-1.573 0-.176-.007-.258.056-.308.226-.126.422-.283.83-.396 1.258-.07.277-.208.384-.485.34-.113-.019-.226 0-.384 0 .038-.138.057-.252.088-.352.598-1.774 1.202-3.549 1.793-5.323.063-.189.139-.296.347-.258.05.006.106.006.157 0 .34-.063.478.088.585.41.579 1.767 1.176 3.529 1.774 5.29.019.063.032.12.057.195zm-1.63-2.403l-.786-2.466c-.02 0-.038-.007-.063-.007-.264.818-.529 1.636-.8 2.48.555-.007 1.077-.007 1.65-.007zM10.67 49.383c.8.056 1.555.063 2.29.182.793.132 1.19.743 1.17 1.617-.018.818-.465 1.36-1.283 1.498-.358.062-.73.069-1.094.075-.208 0-.27.063-.27.27.012.762.005 1.53.005 2.284-.05.026-.075.044-.1.044-.717.05-.717.05-.717-.66v-4.87-.44zm.818.61c0 .724-.006 1.353.007 1.982 0 .063.113.182.176.182.308-.012.63-.025.931-.088.409-.088.63-.409.642-.855.025-.598-.132-.938-.579-1.057-.365-.101-.755-.114-1.177-.164zM.327 47.093c.378.12.705.251 1.05.327.234.05.479.056.718.038.39-.038.705-.214.818-.623.12-.422 0-.825-.384-1.076-.421-.27-.868-.504-1.302-.749-.585-.32-.975-.761-.963-1.485.013-.704.397-1.201 1.076-1.409.66-.201 1.309-.082 1.963.013.057.006.145.1.151.157.019.214.006.428.006.616-.51-.1-.981-.232-1.466-.276-.453-.044-.792.2-.9.534-.113.365.013.711.41.97.44.282.912.509 1.365.78.648.383 1.063.893.956 1.717-.1.73-.566 1.302-1.32 1.39-.624.076-1.266.007-1.901-.012-.208-.006-.315-.113-.277-.346.025-.189 0-.378 0-.566zM29.13 42.122h2.913c0 .107-.012.208 0 .309.025.22-.063.289-.283.283-.585-.013-1.17-.007-1.78-.007v1.907h1.931v.623c-.56 0-1.101.012-1.642-.007-.245-.006-.327.063-.321.315.019.604.006 1.208.006 1.843H32.1v.604h-2.97v-5.87zM22.568 42.122h.717v2.555c.1-.126.145-.177.189-.233.239-.321.528-.573.937-.623.68-.082 1.19.252 1.227.944.063 1.07.02 2.151.02 3.246h-.73v-.34-2.327c0-.076.006-.151 0-.22-.045-.252-.045-.542-.36-.642-.314-.101-.56.037-.754.258-.353.402-.51.88-.516 1.415-.006.604 0 1.214 0 1.844h-.724c-.006-1.938-.006-3.895-.006-5.877zM40.21 51.251h.704v.642c.025.013.044.025.07.032.069-.082.138-.158.207-.24.365-.44.843-.603 1.397-.503.377.07.686.422.73.881.037.365.025.73.031 1.095.006.641-.006 1.277.006 1.919.007.239-.075.327-.302.295a.946.946 0 0 0-.188 0c-.214.026-.296-.056-.29-.283.013-.786.007-1.573.007-2.36v-.282c-.013-.24-.007-.51-.277-.617-.277-.107-.541-.012-.749.183-.44.415-.573.962-.585 1.541-.013.49-.013.988.006 1.479.013.264-.069.365-.333.333-.132-.019-.265 0-.422 0-.012-1.39-.012-2.743-.012-4.115zM64.37 48.011h-.75v-4.096h.699c.013.208.019.416.031.63.032.031.063.056.095.088.025-.063.031-.151.075-.19.183-.169.353-.377.567-.477.73-.346 1.598-.126 1.642.862.05 1.05.012 2.107.012 3.183h-.761v-.409c0-.818.006-1.636 0-2.453 0-.252.006-.529-.277-.642-.308-.126-.572-.007-.793.22-.396.403-.522.919-.54 1.466-.013.49 0 .981 0 1.478v.34zM59.254 51.251h.73v.724c.132-.145.201-.245.296-.315.233-.163.46-.377.723-.459.762-.233 1.378.22 1.403 1.02.026.974.007 1.95.013 2.925 0 .163-.057.233-.22.226a2.624 2.624 0 0 0-.315 0c-.201.02-.245-.075-.245-.264.006-.85.006-1.699 0-2.548 0-.29.019-.61-.327-.742-.265-.101-.642.063-.869.37-.314.422-.421.907-.421 1.416v1.762c-.214 0-.422.013-.623-.006-.057-.007-.138-.1-.138-.157-.007-1.31-.007-2.618-.007-3.952zM50.125 48.011h-.736V43.91h.705v.768c.1-.126.138-.195.195-.246.233-.188.446-.44.717-.535.843-.302 1.46.095 1.504.988.05 1.032.012 2.07.012 3.12h-.761v-.729c0-.736.006-1.466-.006-2.202-.007-.226-.02-.522-.283-.566-.22-.038-.523.006-.692.138-.485.365-.617.925-.63 1.51-.012.516-.006 1.026-.006 1.542 0 .1-.013.201-.019.314zM18.762 55.454c-1.032 0-1.624-.547-1.724-1.667a4.967 4.967 0 0 1 .113-1.428c.15-.711.667-1.133 1.327-1.19.932-.081 1.53.196 1.85.907.346.78.352 1.591.057 2.384-.264.686-.812 1-1.623.994zm1.038-2.082c-.088-.41-.145-.825-.265-1.22-.107-.353-.383-.53-.767-.536-.371 0-.63.189-.743.522a3.501 3.501 0 0 0-.025 2.31c.126.37.41.56.762.547.358-.013.673-.151.786-.516.107-.352.17-.724.252-1.107zM35.774 53.202c.076-.321.12-.768.283-1.164.264-.636.818-.894 1.491-.894.718 0 1.296.265 1.586.957.314.748.32 1.529.063 2.302-.252.755-.881 1.101-1.825 1.051-.755-.038-1.302-.49-1.466-1.227-.069-.295-.082-.604-.132-1.025zm.818.126c.057.358.082.717.176 1.05.113.422.403.61.805.61.384 0 .699-.22.818-.61a3.486 3.486 0 0 0-.025-2.164c-.138-.415-.428-.604-.824-.598-.365.007-.654.214-.761.63-.095.345-.132.717-.19 1.082zM7.72 45.941c.069-.333.113-.717.226-1.082.208-.66.705-.994 1.384-1.044.762-.05 1.403.17 1.737.912.352.799.365 1.636.038 2.447-.296.718-.925 1.007-1.882.925-.673-.056-1.176-.478-1.346-1.17-.075-.302-.1-.617-.157-.988zm2.812 0c-.075-.34-.12-.748-.252-1.126a.774.774 0 0 0-.792-.547c-.365.019-.648.239-.762.641a3.816 3.816 0 0 0-.025 2.077c.12.44.403.66.806.667.409.006.736-.22.855-.655.082-.32.107-.654.17-1.057zM48.59 46.055c-.082.352-.12.78-.277 1.157-.283.692-.931.975-1.862.887-.692-.063-1.19-.497-1.365-1.189a3.734 3.734 0 0 1 .012-1.862c.195-.768.774-1.22 1.542-1.233.937-.013 1.522.365 1.761 1.189.095.314.12.648.189 1.05zm-.824-.114c-.082-.352-.139-.767-.27-1.151a.765.765 0 0 0-.806-.522c-.39.037-.63.27-.736.629-.201.686-.195 1.384-.038 2.07.1.434.41.673.787.686.427.012.755-.214.88-.655.088-.32.12-.654.183-1.057zM33.585 43.91c.012.226.018.427.031.647.189-.17.34-.34.516-.472.409-.308.874-.384 1.327-.157.428.208.548.63.542 1.088-.007.881 0 1.762 0 2.643v.352h-.75v-1.22c0-.535.007-1.07 0-1.605-.005-.283-.012-.579-.339-.704-.252-.095-.623.044-.83.314-.302.384-.447.83-.46 1.309-.019.629-.006 1.252-.006 1.9h-.73v-4.09c.22-.006.447-.006.699-.006zM67.414 56.945c.164-.472.334-.925.472-1.384a.756.756 0 0 0-.012-.472c-.453-1.17-.919-2.34-1.378-3.504-.038-.095-.063-.195-.113-.346.258 0 .484-.025.704.012.088.013.176.151.22.252.315.786.617 1.58.925 2.372.032.088.076.17.145.333.132-.37.245-.666.346-.962.195-.56.41-1.12.579-1.693.082-.264.208-.358.466-.32.12.018.251 0 .421 0-.195.534-.371 1.031-.554 1.528-.44 1.22-.88 2.442-1.327 3.662-.214.579-.22.579-.894.522zM71.51 17.226c1.768-.075 2.945 1.303 2.983 2.926h-2.989c.006-.994.006-1.95.006-2.926zM58.436 52.893h-2.302c-.007.655.12 1.227.56 1.68.471.479 1.075.359 1.648.24.088.446.082.478-.315.56-.836.176-1.642.138-2.246-.573-.465-.541-.547-1.22-.478-1.9.038-.365.139-.749.308-1.07.365-.692 1.227-.811 1.913-.61.648.195.988.824.912 1.673zm-.792-.522c.006-.503-.24-.755-.705-.755-.453 0-.768.315-.755.755h1.46zM27.048 52.9h-2.29c-.013.648.113 1.227.553 1.673.472.479 1.076.359 1.649.24.106.44.1.471-.302.56-.862.188-1.68.138-2.29-.598-.397-.478-.479-1.07-.454-1.661.013-.359.076-.736.208-1.07.283-.723 1.12-1.063 1.944-.85.673.177 1.063.831.982 1.706zm-.787-.535c-.006-.478-.226-.724-.616-.749-.497-.031-.793.22-.862.749h1.478zM62.778 45.545H60.48c0 .654.107 1.233.554 1.68.478.478 1.063.396 1.642.233.12.453.094.497-.34.578-.673.126-1.34.126-1.925-.302-.598-.44-.749-1.088-.768-1.774-.019-.604.044-1.202.472-1.68s1.284-.616 1.894-.352c.541.245.837.837.768 1.617zm-2.272-.497h1.485c.006-.49-.226-.761-.66-.787-.447-.025-.768.27-.825.787zM38.492 46.91c.302-.88.579-1.68.856-2.472.214-.617.214-.617.925-.516-.12.327-.233.648-.347.969-.346.975-.692 1.95-1.05 2.919-.032.088-.164.207-.246.201-.188-.012-.427.139-.553-.132-.05-.107-.088-.214-.132-.32-.479-1.202-.957-2.41-1.454-3.669.277 0 .51-.019.743.013.069.006.144.132.176.22.314.799.623 1.598.931 2.397.038.1.082.208.151.39zM21.662 44.62c-.378-.088-.736-.189-1.101-.245-.233-.032-.472.044-.56.308-.094.283.12.434.308.554.29.188.604.327.906.503.604.346.837.837.692 1.434-.125.523-.604.894-1.245.919-.34.013-.686-.031-1.032-.05-.308-.02-.46-.151-.41-.479.02-.119 0-.245 0-.402.24.107.429.233.63.283.258.063.535.088.799.088.245 0 .44-.145.503-.396.07-.258-.037-.46-.251-.592-.353-.22-.724-.421-1.082-.641-.29-.177-.51-.397-.56-.75-.101-.742.276-1.226 1.07-1.32.226-.026.465-.032.685.012.755.126.686-.05.648.774zM30.59 54.825v.447c-.887.383-1.988.188-2.523-.44-.63-.75-.673-2.373-.057-3.134.466-.579 1.108-.63 1.774-.49.535.113.862.547.925 1.138.007.07 0 .145 0 .245h-.843c-.006-.132-.006-.27-.025-.396-.038-.245-.126-.465-.403-.541-.289-.075-.591-.044-.717.233a4.11 4.11 0 0 0-.308 1.095c-.038.239.019.503.082.742.264.994.887 1.359 1.887 1.12.07-.013.132-.013.208-.019zM66.257 54.806v.46c-1.44.698-2.95-.177-2.995-1.75-.013-.472.031-.975.182-1.415.397-1.158 1.938-1.126 2.505-.623.056.05.125.1.144.163.095.302.17.61.258.913a97.44 97.44 0 0 1-.799.094l-.063-.478c-.031-.277-.17-.478-.453-.529-.29-.05-.54.032-.71.29-.309.49-.303 1.038-.22 1.58.043.282.163.565.301.817.283.497.843.692 1.479.566.113-.031.226-.056.37-.088zM7.267 47.47c.069.497.075.535-.378.579-.434.044-.88.044-1.302-.032-.547-.1-.944-.471-1.12-1-.29-.837-.327-1.686.113-2.491.296-.541.988-.806 1.699-.692.604.1.963.434 1.088 1.019.026.12.02.245.032.415H6.58c-.025-.164-.044-.315-.07-.466-.043-.276-.188-.459-.477-.515-.277-.05-.497.05-.661.27-.516.698-.308 2.253.378 2.775.314.245.685.295 1.07.239.144-.032.282-.07.446-.1zM13.244 44.4c0 .956-.013 1.843.006 2.73.006.315.264.472.642.453.113-.006.226-.031.333-.05.151.49.095.573-.377.566-.227 0-.466-.006-.686-.056-.46-.107-.673-.372-.68-.85-.012-.799-.006-1.591-.006-2.39v-.365c-.245-.013-.459-.026-.698-.038v-.497c.214-.013.434-.02.71-.032-.106-.616-.012-1.132.737-1.277v1.277h1.07v.529h-1.051zM68.176 44.412h-.686v-.51c.22-.012.434-.018.698-.03-.125-.636.02-1.127.743-1.278v1.296h1.044c.113.516.1.535-.377.535-.674-.006-.674-.006-.674.654v1.542c0 .906.133 1.025 1.039.93v.53c-.466.062-.932.1-1.366-.12-.377-.195-.428-.566-.434-.944-.006-.73 0-1.466 0-2.196.013-.132.013-.245.013-.409zM15.263 44.425h-.68v-.535h.687c-.088-.623-.02-1.157.736-1.302v1.29h1.063c.006.176.013.327.025.522h-1.082V46.822c0 .648.24.843.887.73.05-.006.1-.006.17-.013v.598c-.434-.044-.868-.031-1.27-.145-.397-.107-.536-.472-.536-.874V44.79v-.365zM21.04 51.755v-.504h.679c-.076-.629-.02-1.176.755-1.32v1.295h1.057v.522c-.271 0-.541.007-.812 0-.164-.006-.252.038-.252.227.007.799 0 1.592.013 2.39.006.36.163.51.516.542.163.012.333 0 .497 0 .126.484.082.54-.41.547-.125 0-.25 0-.377-.006-.667-.044-.987-.378-.994-1.045-.006-.742-.019-1.49.007-2.233.006-.315-.063-.478-.41-.422-.069.02-.157.007-.27.007zM32.44 49.93v1.296h1.044v.516h-1.05v2.517c.005.484.188.667.672.654.114 0 .227-.012.34-.025.126.503.088.56-.403.566-.113 0-.232.006-.346-.006-.704-.05-1.013-.378-1.019-1.089 0-.742-.012-1.49.006-2.233.007-.302-.081-.422-.383-.378-.088.013-.183 0-.302 0v-.497c.214-.012.428-.018.692-.031-.113-.623-.025-1.139.748-1.29zM42.733 43.903h.698c.013.201.019.402.031.68.372-.41.692-.793 1.271-.756v.806c-.012.006-.031.031-.05.031-1.05-.006-1.202.66-1.233 1.523-.02.503 0 1.006-.007 1.51 0 .1-.006.201-.012.32h-.698v-4.114zM15.503 51.264v.68c.34-.447.673-.8 1.258-.793v.818c-1.038.17-1.265.44-1.271 1.497 0 .598-.006 1.195-.006 1.787 0 .019-.013.038-.032.082h-.704v-4.077c.257.006.497.006.755.006zM85.868 5.883c-.384 1.006-.743 1.944-1.108 2.906-.666-.635-1.308-1.24-2-1.893 1.038-.34 2.038-.667 3.108-1.013zM81.332 5.826c-.812-.503-1.567-.975-2.372-1.479.874-.515 1.698-1.006 2.58-1.528-.07 1.019-.14 1.981-.208 3.007zM70.088 2.655L71.542 0c.446.906.862 1.762 1.302 2.655h-2.756zM88.649 17.012c-.22-.887-.416-1.705-.636-2.585.975.195 1.9.377 2.9.578-.767.68-1.484 1.322-2.264 2.007zM76.7.566c.146 1.013.278 1.944.422 2.951-.836-.214-1.63-.409-2.478-.623.685-.774 1.34-1.522 2.057-2.328zM87.195 12.59c-.44-.743-.862-1.448-1.315-2.221 1.013-.057 1.97-.107 3.008-.158-.585.824-1.126 1.592-1.693 2.378zM91.593 20.272c-.931.421-1.768.799-2.655 1.195v-2.548c.875.44 1.724.874 2.655 1.353zM18.504 48.011h-.718V43.91h.718v4.102zM41.543 48.011h-.717V43.91h.717v4.102zM34.214 51.251h.723v.378c0 1.113-.012 2.22.007 3.334.006.309-.063.46-.397.403-.1-.019-.207 0-.333 0v-4.115zM34.157 49.452c.076-.006.126-.019.176-.019.762.019.642-.17.655.68 0 .163-.063.226-.22.22-.196-.006-.39 0-.61 0v-.881zM40.776 42.122h.805v.843h-.805v-.843zM18.541 42.978h-.792v-.856h.792v.856z" />
                </g>
              </svg>
            </span>
          </a>
        </div>
        <div className="govuk-header__content govuk-!-padding-top-3">
          <span className="govuk-header govuk-header__link--service-name">Apply for a marine pen fish farm permit</span>
          <div className="govuk-header__links govuk-!-padding-top-1">
            {
              isNotification
                ? (
                  <span className="govuk-header__logotype-text">
                    <a className="govuk-!-font-size-14 govuk-!-font-weight-bold white" href="/">Notifications (2)</a>
                  </span>
                )
                : ''
            }
            {
              userName
                ? (
                  <span className="govuk-header__logotype-text">
                    <a className="govuk-!-font-size-14 govuk-!-font-weight-bold white" href="/">{userName}</a>
                  </span>
                ) : (
                  <span className="govuk-header__logotype-text">
                    <a className="govuk-!-font-size-14 govuk-!-font-weight-bold white" href="/">Sign in</a>
                  </span>
                )
            }
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  isNotification: PropTypes.bool.isRequired,
  userName: PropTypes.string.isRequired,
};
