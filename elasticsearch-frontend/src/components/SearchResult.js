import React, {PropTypes} from 'react'
import ReactMarkdown from 'react-markdown'
import { Item } from 'semantic-ui-react'

import 'semantic-ui/dist/semantic.css'


const SearchResult = ({ title, highlight, url }) => (
    <Item.Group>
        <Item>
            <Item.Content>
                <Item.Header as='a'>{title}</Item.Header>
                <Item.Meta>{url}</Item.Meta>
                <Item.Description>...<ReactMarkdown source={String(highlight)} escapeHtml />...</Item.Description>
            </Item.Content>
        </Item>
    </Item.Group>
)

SearchResult.PropTypes = {
    title: PropTypes.string,
    url: PropTypes.string,
    highlight: PropTypes.string
}

export default SearchResult