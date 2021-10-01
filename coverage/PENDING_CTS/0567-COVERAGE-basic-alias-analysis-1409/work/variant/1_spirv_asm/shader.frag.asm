; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 119
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %59 %95
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "_GLF_global_loop_count"
               OpName %14 "m22"
               OpName %18 "buf1"
               OpMemberName %18 0 "_GLF_uniform_float_values"
               OpName %20 ""
               OpName %31 "f"
               OpName %35 "c"
               OpName %41 "buf2"
               OpMemberName %41 0 "zero"
               OpName %43 ""
               OpName %56 "r"
               OpName %59 "gl_FragCoord"
               OpName %95 "_GLF_color"
               OpName %97 "buf0"
               OpMemberName %97 0 "_GLF_uniform_int_values"
               OpName %99 ""
               OpDecorate %17 ArrayStride 16
               OpMemberDecorate %18 0 Offset 0
               OpDecorate %18 Block
               OpDecorate %20 DescriptorSet 0
               OpDecorate %20 Binding 1
               OpMemberDecorate %41 0 Offset 0
               OpDecorate %41 Block
               OpDecorate %43 DescriptorSet 0
               OpDecorate %43 Binding 2
               OpDecorate %59 BuiltIn FragCoord
               OpDecorate %95 Location 0
               OpDecorate %96 ArrayStride 16
               OpMemberDecorate %97 0 Offset 0
               OpDecorate %97 Block
               OpDecorate %99 DescriptorSet 0
               OpDecorate %99 Binding 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Private %6
          %8 = OpVariable %7 Private
          %9 = OpConstant %6 0
         %10 = OpTypeFloat 32
         %11 = OpTypeVector %10 2
         %12 = OpTypeMatrix %11 2
         %13 = OpTypePointer Function %12
         %15 = OpTypeInt 32 0
         %16 = OpConstant %15 2
         %17 = OpTypeArray %10 %16
         %18 = OpTypeStruct %17
         %19 = OpTypePointer Uniform %18
         %20 = OpVariable %19 Uniform
         %21 = OpConstant %6 1
         %22 = OpTypePointer Uniform %10
         %25 = OpConstant %10 1
         %26 = OpConstant %10 0
         %30 = OpTypePointer Function %10
         %34 = OpTypePointer Function %6
         %41 = OpTypeStruct %10
         %42 = OpTypePointer Uniform %41
         %43 = OpVariable %42 Uniform
         %48 = OpTypeBool
         %51 = OpConstant %6 10
         %57 = OpTypeVector %10 4
         %58 = OpTypePointer Input %57
         %59 = OpVariable %58 Input
         %60 = OpConstant %15 0
         %61 = OpTypePointer Input %10
         %69 = OpConstantTrue %48
         %94 = OpTypePointer Output %57
         %95 = OpVariable %94 Output
         %96 = OpTypeArray %6 %16
         %97 = OpTypeStruct %96
         %98 = OpTypePointer Uniform %97
         %99 = OpVariable %98 Uniform
        %100 = OpTypePointer Uniform %6
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %14 = OpVariable %13 Function
         %31 = OpVariable %30 Function
         %35 = OpVariable %34 Function
         %56 = OpVariable %34 Function
         %70 = OpVariable %13 Function
               OpStore %8 %9
         %23 = OpAccessChain %22 %20 %9 %21
         %24 = OpLoad %10 %23
         %27 = OpCompositeConstruct %11 %24 %26
         %28 = OpCompositeConstruct %11 %26 %24
         %29 = OpCompositeConstruct %12 %27 %28
               OpStore %14 %29
         %32 = OpAccessChain %22 %20 %9 %21
         %33 = OpLoad %10 %32
               OpStore %31 %33
               OpStore %35 %21
               OpBranch %36
         %36 = OpLabel
               OpLoopMerge %38 %39 None
               OpBranch %40
         %40 = OpLabel
         %44 = OpAccessChain %22 %43 %9
         %45 = OpLoad %10 %44
         %46 = OpAccessChain %22 %20 %9 %9
         %47 = OpLoad %10 %46
         %49 = OpFOrdLessThan %48 %45 %47
         %50 = OpLoad %6 %8
         %52 = OpSLessThan %48 %50 %51
         %53 = OpLogicalAnd %48 %49 %52
               OpBranchConditional %53 %37 %38
         %37 = OpLabel
         %54 = OpLoad %6 %8
         %55 = OpIAdd %6 %54 %21
               OpStore %8 %55
               OpStore %56 %21
         %62 = OpAccessChain %61 %59 %60
         %63 = OpLoad %10 %62
         %64 = OpAccessChain %22 %20 %9 %21
         %65 = OpLoad %10 %64
         %66 = OpFOrdLessThan %48 %63 %65
               OpSelectionMerge %68 None
               OpBranchConditional %66 %67 %68
         %67 = OpLabel
               OpSelectionMerge %72 None
               OpBranchConditional %69 %71 %74
         %71 = OpLabel
         %73 = OpLoad %12 %14
               OpStore %70 %73
               OpBranch %72
         %74 = OpLabel
         %75 = OpAccessChain %22 %20 %9 %9
         %76 = OpLoad %10 %75
         %77 = OpCompositeConstruct %11 %76 %26
         %78 = OpCompositeConstruct %11 %26 %76
         %79 = OpCompositeConstruct %12 %77 %78
               OpStore %70 %79
               OpBranch %72
         %72 = OpLabel
         %80 = OpLoad %6 %35
         %81 = OpLoad %6 %56
         %82 = OpAccessChain %30 %70 %80 %81
         %83 = OpLoad %10 %82
         %84 = OpLoad %10 %31
         %85 = OpFAdd %10 %84 %83
               OpStore %31 %85
               OpBranch %68
         %68 = OpLabel
               OpBranch %39
         %39 = OpLabel
         %86 = OpLoad %6 %35
         %87 = OpIAdd %6 %86 %21
               OpStore %35 %87
               OpBranch %36
         %38 = OpLabel
         %88 = OpLoad %10 %31
         %89 = OpAccessChain %22 %20 %9 %21
         %90 = OpLoad %10 %89
         %91 = OpFOrdEqual %48 %88 %90
               OpSelectionMerge %93 None
               OpBranchConditional %91 %92 %114
         %92 = OpLabel
        %101 = OpAccessChain %100 %99 %9 %21
        %102 = OpLoad %6 %101
        %103 = OpConvertSToF %10 %102
        %104 = OpAccessChain %100 %99 %9 %9
        %105 = OpLoad %6 %104
        %106 = OpConvertSToF %10 %105
        %107 = OpAccessChain %100 %99 %9 %9
        %108 = OpLoad %6 %107
        %109 = OpConvertSToF %10 %108
        %110 = OpAccessChain %100 %99 %9 %21
        %111 = OpLoad %6 %110
        %112 = OpConvertSToF %10 %111
        %113 = OpCompositeConstruct %57 %103 %106 %109 %112
               OpStore %95 %113
               OpBranch %93
        %114 = OpLabel
        %115 = OpAccessChain %100 %99 %9 %9
        %116 = OpLoad %6 %115
        %117 = OpConvertSToF %10 %116
        %118 = OpCompositeConstruct %57 %117 %117 %117 %117
               OpStore %95 %118
               OpBranch %93
         %93 = OpLabel
               OpReturn
               OpFunctionEnd
