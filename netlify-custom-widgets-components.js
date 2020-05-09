// Image
imageEmbed = {
    id: "image",
    label: "Single Image",
    fields: 
        [
            {name: 'img_link', label: 'Image', widget: 'file'},
            {name: 'img_title', label: 'Image Title', widget: 'string'},
            {name: 'img_alt', label: 'Image Alternative Text', widget: 'string'},
        ],
    pattern: /^\{\%include\simage\-embed.html\s\img\_link=\"(.+)\"\simg\_title\=\"(.+)\"\simg\_alt\=\"(.+)\"\%\}$/,
    fromBlock: function(match) {return {id: match[1], type: match[2]};},
    toBlock: function(obj) {return '{%include image-embed.html img_link="' + obj.img_link + '" img_title="' + obj.img_title + '" img_alt="'+obj.img_alt+'"%}';},
    toPreview: function(obj) {return ('<img src="'+obj.img_link+'" alt="Image"/>');}
}

// Youtube
youtubeEmbed = {
    id: "youtube",
    label: "Youtube",
    fields: [
        {name: 'id', label: 'Youtube Video/Playlist ID', widget: 'string'},
        {name: 'type', label: 'Video/Playlist', widget: 'select', options: [{label: 'Video', value: 'video'},{label: 'Playlist', value: 'playlist'}], multiple: false, default: ['video'], }
        ],
    pattern: /^\{\%\sinclude\syt-embed\.html\sid=\"(\S+)\"\stype\=\"(video|playlist)\"\s\%\}$/,
    fromBlock: function(match) {return {id: match[1], type: match[2]};},
    toBlock: function(obj) {return '{%include yt-embed.html id="' + obj.id + '" type="' + obj.type + '"%}';},
    toPreview: function(obj) {return ('<img src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg" alt="Youtube Video"/>');}
}

// Flickr
flickrEmbed = {
    id: "flickr",
    label: "Flickr Album",
    fields: 
        [
            {name: 'album_title', label: 'Album Title', widget: 'string'},
            {name: 'album_link', label: 'Album Link', widget: 'string'},
            {name: 'album_image', label: 'First Image Link', widget: 'string'}
        ],
    pattern: /^\{\%include\sflickr-embed.html\salbum\-title\=\"(.+)\"\salbum-link\=\"(.+)\" first-image\=\"(.+)\"\%\}$/,
    fromBlock: function(match) {return {album_title: match[1], album_link: match[2], album_image: match[3]}},
    toBlock: function(obj) {return '{%include flickr-embed.html album-title="'+obj.album_title+'" album-link="'+obj.album_link+'" first-image="'+obj.album_image+'"%}';},
    toPreview: function(obj) {return ('<img src="'+ obj.album_image + '" alt="Youtube Video"/>');}
}

// Facebook
facebookEmbed = {
    id: "facebook",
    label: "Facebook Post/Image/Video",
    fields: 
        [{name: 'fb_link', label: 'Facebook Post/Image/Video Link', widget: 'string'}],
    pattern: /^\{\%include\sfb\-embed\.html\sfb\_link\=\"(.+)\"\%\}$/,
    fromBlock: function(match) {return {fb_link: match[1]}},
    toBlock: function(obj) {return '{%include fb-embed.html fb_link="'+obj.fb_link+'"%}';},
    toPreview: function(obj) {return ('<h4>Facebook Embed</h4>');}
}

// Register Editor Component
CMS.registerEditorComponent(youtubeEmbed);
CMS.registerEditorComponent(flickrEmbed);
CMS.registerEditorComponent(imageEmbed);
CMS.registerEditorComponent(facebookEmbed);