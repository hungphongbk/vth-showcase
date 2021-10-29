import type {GetStaticProps, InferGetStaticPropsType, NextPage} from 'next'
import {Container, Grid, Stack} from "@mui/material";
import demoData, {DataItem} from "../src/assets/data";
import PostCard from "../src/components/PostCard";
import {useCallback, useState} from "react";
import Masonry from "@mui/lab/Masonry";

function Home({posts}: InferGetStaticPropsType<typeof getStaticProps>) {
    const [selected, setSelected] = useState(0);
    const doSelect = useCallback((id: number) => {
        if (selected > 0) setSelected(0)
        else setSelected(id);
    }, [selected])
    return (
        <Container sx={{mt: 2}}>
            <Masonry columns={2} spacing={1} style={{width: 'calc(100% + 8px)'}}>
                {posts.map(post =>
                    <div key={post.id}>
                        <PostCard post={post} isSelected={selected === post.id}
                                  onClick={() => doSelect(post.id)}/>
                    </div>
                )}
            </Masonry>
        </Container>
    )
}

export default Home

export const getStaticProps = async () => {

    return Promise.resolve({props: {posts: demoData}})
}