const elementVNode = h(
    'div',  // tag  html tag
    {
      style: {
        height: '100px',
        width: '100px',
        background: 'red'
      }
    },
    h(Portal, {
      target: '#portal-box'
    }, [
      h('span', null, '我是标题1....'),
      h('span', null, '我是标题2....')
    ])
  )
  
  
  render(elementVNode, document.getElementById('app'))