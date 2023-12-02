exports.createPages = async ({ graphql, actions }) => {
    const { createRedirect } = actions

    createRedirect({
        fromPath: `/donate`,
        toPath: `/how-to-help`,
    })
}