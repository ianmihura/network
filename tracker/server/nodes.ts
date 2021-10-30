const Nodes: string[] = []

export const addNode = (id: string): number => Nodes.push(id)

export const deleteNode = (id: string) => {
    for (let i = 0; i < Nodes.length; i++)
        if (Nodes[i] == id)
            Nodes.splice(i, 1)
}

export const getNodes = () => Nodes

export const getNode = (id: string) => {
    for (let i = 0; i < Nodes.length; i++)
        if (Nodes[i] == id)
            return Nodes[i]
}