; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 137
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %54 %90
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %10 "func0(i1;"
               OpName %9 "x"
               OpName %13 "func1("
               OpName %15 "i"
               OpName %19 "buf0"
               OpMemberName %19 0 "_GLF_uniform_int_values"
               OpName %21 ""
               OpName %54 "gl_FragCoord"
               OpName %79 "param"
               OpName %90 "_GLF_color"
               OpName %95 "param"
               OpDecorate %18 ArrayStride 16
               OpMemberDecorate %19 0 Offset 0
               OpDecorate %19 Block
               OpDecorate %21 DescriptorSet 0
               OpDecorate %21 Binding 0
               OpDecorate %54 BuiltIn FragCoord
               OpDecorate %90 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %8 = OpTypeFunction %6 %7
         %12 = OpTypeFunction %6
         %16 = OpTypeInt 32 0
         %17 = OpConstant %16 6
         %18 = OpTypeArray %6 %17
         %19 = OpTypeStruct %18
         %20 = OpTypePointer Uniform %19
         %21 = OpVariable %20 Uniform
         %22 = OpConstant %6 0
         %23 = OpTypePointer Uniform %6
         %32 = OpConstant %6 5
         %35 = OpTypeBool
         %38 = OpConstant %6 1
         %51 = OpTypeFloat 32
         %52 = OpTypeVector %51 4
         %53 = OpTypePointer Input %52
         %54 = OpVariable %53 Input
         %55 = OpConstant %16 0
         %56 = OpTypePointer Input %51
         %59 = OpConstant %51 0
         %63 = OpConstant %6 -1
         %65 = OpConstant %6 2
         %68 = OpConstant %16 1
         %89 = OpTypePointer Output %52
         %90 = OpVariable %89 Output
        %104 = OpConstant %6 3
        %108 = OpConstant %6 4
          %4 = OpFunction %2 None %3
          %5 = OpLabel
        %113 = OpFunctionCall %6 %13
        %114 = OpAccessChain %23 %21 %22 %38
        %115 = OpLoad %6 %114
        %116 = OpIEqual %35 %113 %115
               OpSelectionMerge %118 None
               OpBranchConditional %116 %117 %132
        %117 = OpLabel
        %119 = OpAccessChain %23 %21 %22 %38
        %120 = OpLoad %6 %119
        %121 = OpConvertSToF %51 %120
        %122 = OpAccessChain %23 %21 %22 %22
        %123 = OpLoad %6 %122
        %124 = OpConvertSToF %51 %123
        %125 = OpAccessChain %23 %21 %22 %22
        %126 = OpLoad %6 %125
        %127 = OpConvertSToF %51 %126
        %128 = OpAccessChain %23 %21 %22 %38
        %129 = OpLoad %6 %128
        %130 = OpConvertSToF %51 %129
        %131 = OpCompositeConstruct %52 %121 %124 %127 %130
               OpStore %90 %131
               OpBranch %118
        %132 = OpLabel
        %133 = OpAccessChain %23 %21 %22 %22
        %134 = OpLoad %6 %133
        %135 = OpConvertSToF %51 %134
        %136 = OpCompositeConstruct %52 %135 %135 %135 %135
               OpStore %90 %136
               OpBranch %118
        %118 = OpLabel
               OpReturn
               OpFunctionEnd
         %10 = OpFunction %6 None %8
          %9 = OpFunctionParameter %7
         %11 = OpLabel
         %15 = OpVariable %7 Function
         %24 = OpAccessChain %23 %21 %22 %22
         %25 = OpLoad %6 %24
               OpStore %15 %25
               OpBranch %26
         %26 = OpLabel
               OpLoopMerge %28 %29 None
               OpBranch %30
         %30 = OpLabel
         %31 = OpLoad %6 %15
         %33 = OpAccessChain %23 %21 %22 %32
         %34 = OpLoad %6 %33
         %36 = OpSLessThan %35 %31 %34
               OpBranchConditional %36 %27 %28
         %27 = OpLabel
         %37 = OpLoad %6 %9
         %39 = OpAccessChain %23 %21 %22 %38
         %40 = OpLoad %6 %39
         %41 = OpIEqual %35 %37 %40
               OpSelectionMerge %43 None
               OpBranchConditional %41 %42 %43
         %42 = OpLabel
         %44 = OpAccessChain %23 %21 %22 %38
         %45 = OpLoad %6 %44
               OpReturnValue %45
         %43 = OpLabel
         %47 = OpLoad %6 %9
         %48 = OpIAdd %6 %47 %38
               OpStore %9 %48
               OpBranch %29
         %29 = OpLabel
         %49 = OpLoad %6 %15
         %50 = OpIAdd %6 %49 %38
               OpStore %15 %50
               OpBranch %26
         %28 = OpLabel
         %57 = OpAccessChain %56 %54 %55
         %58 = OpLoad %51 %57
         %60 = OpFOrdGreaterThan %35 %58 %59
               OpSelectionMerge %62 None
               OpBranchConditional %60 %61 %62
         %61 = OpLabel
               OpReturnValue %63
         %62 = OpLabel
               OpReturnValue %65
               OpFunctionEnd
         %13 = OpFunction %6 None %12
         %14 = OpLabel
         %79 = OpVariable %7 Function
         %95 = OpVariable %7 Function
         %69 = OpAccessChain %56 %54 %68
         %70 = OpLoad %51 %69
         %71 = OpFOrdGreaterThan %35 %70 %59
               OpSelectionMerge %73 None
               OpBranchConditional %71 %72 %73
         %72 = OpLabel
         %74 = OpAccessChain %56 %54 %68
         %75 = OpLoad %51 %74
         %76 = OpFOrdGreaterThan %35 %75 %59
               OpSelectionMerge %78 None
               OpBranchConditional %76 %77 %78
         %77 = OpLabel
         %80 = OpAccessChain %23 %21 %22 %22
         %81 = OpLoad %6 %80
               OpStore %79 %81
         %82 = OpFunctionCall %6 %10 %79
               OpReturnValue %82
         %78 = OpLabel
         %84 = OpAccessChain %56 %54 %55
         %85 = OpLoad %51 %84
         %86 = OpFOrdGreaterThan %35 %85 %59
               OpSelectionMerge %88 None
               OpBranchConditional %86 %87 %88
         %87 = OpLabel
         %91 = OpAccessChain %23 %21 %22 %22
         %92 = OpLoad %6 %91
         %93 = OpConvertSToF %51 %92
         %94 = OpCompositeConstruct %52 %93 %93 %93 %93
               OpStore %90 %94
               OpBranch %88
         %88 = OpLabel
         %96 = OpAccessChain %23 %21 %22 %65
         %97 = OpLoad %6 %96
               OpStore %95 %97
         %98 = OpFunctionCall %6 %10 %95
         %99 = OpAccessChain %23 %21 %22 %22
        %100 = OpLoad %6 %99
        %101 = OpSGreaterThan %35 %98 %100
               OpSelectionMerge %103 None
               OpBranchConditional %101 %102 %103
        %102 = OpLabel
        %105 = OpAccessChain %23 %21 %22 %104
        %106 = OpLoad %6 %105
               OpReturnValue %106
        %103 = OpLabel
               OpBranch %73
         %73 = OpLabel
        %109 = OpAccessChain %23 %21 %22 %108
        %110 = OpLoad %6 %109
               OpReturnValue %110
               OpFunctionEnd
