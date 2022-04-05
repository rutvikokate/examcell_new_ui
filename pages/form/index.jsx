import React, {Component, useState } from 'react'
import Navbar from '../../components/Navbar'
import RegularForm from '../../components/RegularForm'
import Sidebar from '../../components/Sidebar'
import KtForm from '../../components/KtForm'

export class index extends Component{
    constructor(){
        super();
        this.state={
            tog:'Regular'
        }
    }

    componentDidMount=()=>{

    }
    render() {
        const activeTab="bg-primary rounded-full text-white transition"
        const tog=this.state.tog;
        return (
            <div>
                <Navbar />
                <Sidebar />
                <div id="formWrapper" className="mt-2 flex w-full md:w-9/12 ml-auto rounded-md flex-col">
                    <section className=" rounded-full transition mx-auto w-64 border dark:border-neutral-800 p-1 inline-flex flex justify-between">
                        <button className={`w-1/2 px-3 py-2  ${tog == 'Regular' ? activeTab : ''}`} onClick={(e) => this.setState({tog:'Regular'})}>Regular</button>
                        <button className={`w-1/2 px-3 py-2  ${tog == 'KT' ? activeTab : ''}`} onClick={(e) => this.setState({tog:'KT'})}>KT</button>
                    </section>
                    {tog == 'Regular' ? (
                        <RegularForm type={tog} />
                    ) : (<KtForm type={tog} />)}
                </div>
            </div>
        )
    }
}


export default index
