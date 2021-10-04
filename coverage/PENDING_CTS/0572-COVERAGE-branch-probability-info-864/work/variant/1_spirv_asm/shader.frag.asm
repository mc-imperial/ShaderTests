; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 118
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %99
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %12 "func(f1;f1;"
               OpName %10 "a"
               OpName %11 "b"
               OpName %15 "c"
               OpName %19 "buf0"
               OpMemberName %19 0 "_GLF_uniform_int_values"
               OpName %21 ""
               OpName %27 "d"
               OpName %28 "i"
               OpName %52 "buf1"
               OpMemberName %52 0 "_GLF_uniform_float_values"
               OpName %54 ""
               OpName %80 "buf_push"
               OpMemberName %80 0 "resolution"
               OpName %82 ""
               OpName %83 "param"
               OpName %88 "param"
               OpName %99 "_GLF_color"
               OpDecorate %18 ArrayStride 16
               OpMemberDecorate %19 0 Offset 0
               OpDecorate %19 Block
               OpDecorate %21 DescriptorSet 0
               OpDecorate %21 Binding 0
               OpDecorate %51 ArrayStride 16
               OpMemberDecorate %52 0 Offset 0
               OpDecorate %52 Block
               OpDecorate %54 DescriptorSet 0
               OpDecorate %54 Binding 1
               OpMemberDecorate %80 0 Offset 0
               OpDecorate %80 Block
               OpDecorate %99 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypePointer Function %6
          %8 = OpTypeInt 32 1
          %9 = OpTypeFunction %8 %7 %7
         %14 = OpTypePointer Function %8
         %16 = OpTypeInt 32 0
         %17 = OpConstant %16 3
         %18 = OpTypeArray %8 %17
         %19 = OpTypeStruct %18
         %20 = OpTypePointer Uniform %19
         %21 = OpVariable %20 Uniform
         %22 = OpConstant %8 0
         %23 = OpConstant %8 1
         %24 = OpTypePointer Uniform %8
         %35 = OpConstant %8 2
         %36 = OpTypeBool
         %44 = OpConstant %8 110
         %50 = OpConstant %16 1
         %51 = OpTypeArray %6 %50
         %52 = OpTypeStruct %51
         %53 = OpTypePointer Uniform %52
         %54 = OpVariable %53 Uniform
         %55 = OpTypePointer Uniform %6
         %79 = OpTypeVector %6 2
         %80 = OpTypeStruct %79
         %81 = OpTypePointer PushConstant %80
         %82 = OpVariable %81 PushConstant
         %84 = OpConstant %16 0
         %85 = OpTypePointer PushConstant %6
         %97 = OpTypeVector %6 4
         %98 = OpTypePointer Output %97
         %99 = OpVariable %98 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %83 = OpVariable %7 Function
         %88 = OpVariable %7 Function
         %86 = OpAccessChain %85 %82 %22 %84
         %87 = OpLoad %6 %86
               OpStore %83 %87
         %89 = OpAccessChain %85 %82 %22 %50
         %90 = OpLoad %6 %89
               OpStore %88 %90
         %91 = OpFunctionCall %8 %12 %83 %88
         %92 = OpAccessChain %24 %21 %22 %35
         %93 = OpLoad %8 %92
         %94 = OpIEqual %36 %91 %93
               OpSelectionMerge %96 None
               OpBranchConditional %94 %95 %113
         %95 = OpLabel
        %100 = OpAccessChain %24 %21 %22 %23
        %101 = OpLoad %8 %100
        %102 = OpConvertSToF %6 %101
        %103 = OpAccessChain %24 %21 %22 %22
        %104 = OpLoad %8 %103
        %105 = OpConvertSToF %6 %104
        %106 = OpAccessChain %24 %21 %22 %22
        %107 = OpLoad %8 %106
        %108 = OpConvertSToF %6 %107
        %109 = OpAccessChain %24 %21 %22 %23
        %110 = OpLoad %8 %109
        %111 = OpConvertSToF %6 %110
        %112 = OpCompositeConstruct %97 %102 %105 %108 %111
               OpStore %99 %112
               OpBranch %96
        %113 = OpLabel
        %114 = OpAccessChain %24 %21 %22 %22
        %115 = OpLoad %8 %114
        %116 = OpConvertSToF %6 %115
        %117 = OpCompositeConstruct %97 %116 %116 %116 %116
               OpStore %99 %117
               OpBranch %96
         %96 = OpLabel
               OpReturn
               OpFunctionEnd
         %12 = OpFunction %8 None %9
         %10 = OpFunctionParameter %7
         %11 = OpFunctionParameter %7
         %13 = OpLabel
         %15 = OpVariable %14 Function
         %27 = OpVariable %14 Function
         %28 = OpVariable %14 Function
         %25 = OpAccessChain %24 %21 %22 %23
         %26 = OpLoad %8 %25
               OpStore %15 %26
               OpStore %27 %23
               OpStore %28 %22
               OpBranch %29
         %29 = OpLabel
               OpLoopMerge %31 %32 None
               OpBranch %33
         %33 = OpLabel
         %34 = OpLoad %8 %28
         %37 = OpSLessThan %36 %34 %35
               OpBranchConditional %37 %30 %31
         %30 = OpLabel
               OpBranch %38
         %38 = OpLabel
               OpLoopMerge %40 %41 None
               OpBranch %42
         %42 = OpLabel
         %43 = OpLoad %8 %27
         %45 = OpSLessThan %36 %43 %44
               OpBranchConditional %45 %39 %40
         %39 = OpLabel
         %46 = OpLoad %8 %27
         %47 = OpConvertSToF %6 %46
         %48 = OpLoad %6 %11
         %49 = OpFMod %6 %47 %48
         %56 = OpAccessChain %55 %54 %22 %22
         %57 = OpLoad %6 %56
         %58 = OpFOrdGreaterThan %36 %49 %57
               OpSelectionMerge %60 None
               OpBranchConditional %58 %59 %60
         %59 = OpLabel
         %61 = OpLoad %8 %15
         %62 = OpIAdd %8 %61 %23
               OpStore %15 %62
               OpBranch %60
         %60 = OpLabel
         %63 = OpLoad %8 %27
         %64 = OpConvertSToF %6 %63
         %65 = OpLoad %6 %10
         %66 = OpFOrdGreaterThanEqual %36 %64 %65
               OpSelectionMerge %68 None
               OpBranchConditional %66 %67 %68
         %67 = OpLabel
         %69 = OpLoad %8 %15
               OpReturnValue %69
         %68 = OpLabel
         %71 = OpLoad %8 %27
         %72 = OpIAdd %8 %71 %23
               OpStore %27 %72
               OpBranch %41
         %41 = OpLabel
               OpBranch %38
         %40 = OpLabel
               OpBranch %32
         %32 = OpLabel
         %73 = OpLoad %8 %28
         %74 = OpIAdd %8 %73 %23
               OpStore %28 %74
               OpBranch %29
         %31 = OpLabel
         %75 = OpAccessChain %24 %21 %22 %22
         %76 = OpLoad %8 %75
               OpReturnValue %76
               OpFunctionEnd
