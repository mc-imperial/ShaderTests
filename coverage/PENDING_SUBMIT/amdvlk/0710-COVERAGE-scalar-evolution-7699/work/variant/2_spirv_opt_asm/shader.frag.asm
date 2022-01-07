; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 132
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %31 %61
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %31 "gl_FragCoord"
               OpName %46 "buf0"
               OpMemberName %46 0 "_GLF_uniform_int_values"
               OpName %48 ""
               OpName %61 "_GLF_color"
               OpDecorate %31 BuiltIn FragCoord
               OpDecorate %45 ArrayStride 16
               OpMemberDecorate %46 0 Offset 0
               OpDecorate %46 Block
               OpDecorate %48 DescriptorSet 0
               OpDecorate %48 Binding 0
               OpDecorate %61 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
         %15 = OpTypeBool
         %16 = OpConstantTrue %15
         %19 = OpConstant %6 0
         %26 = OpConstant %6 1
         %28 = OpTypeFloat 32
         %29 = OpTypeVector %28 4
         %30 = OpTypePointer Input %29
         %31 = OpVariable %30 Input
         %32 = OpTypeInt 32 0
         %33 = OpConstant %32 1
         %34 = OpTypePointer Input %28
         %37 = OpConstant %28 0
         %44 = OpConstant %32 2
         %45 = OpTypeArray %6 %44
         %46 = OpTypeStruct %45
         %47 = OpTypePointer Uniform %46
         %48 = OpVariable %47 Uniform
         %49 = OpTypePointer Uniform %6
         %60 = OpTypePointer Output %29
         %61 = OpVariable %60 Output
         %84 = OpConstant %32 0
         %85 = OpConstantFalse %15
        %131 = OpUndef %6
          %4 = OpFunction %2 None %3
          %5 = OpLabel
               OpSelectionMerge %121 None
               OpSwitch %84 %97
         %97 = OpLabel
               OpBranch %98
         %98 = OpLabel
        %126 = OpPhi %15 %85 %97 %124 %117
        %130 = OpPhi %6 %131 %97 %128 %117
               OpLoopMerge %118 %117 None
               OpBranch %101
        %101 = OpLabel
        %123 = OpPhi %6 %19 %98 %113 %111
        %104 = OpSLessThan %15 %123 %26
               OpLoopMerge %114 %111 None
               OpBranchConditional %104 %105 %114
        %105 = OpLabel
        %106 = OpAccessChain %34 %31 %33
        %107 = OpLoad %28 %106
        %108 = OpFOrdGreaterThan %15 %107 %37
               OpSelectionMerge %110 None
               OpBranchConditional %108 %109 %110
        %109 = OpLabel
               OpBranch %114
        %110 = OpLabel
               OpBranch %111
        %111 = OpLabel
        %113 = OpIAdd %6 %123 %26
               OpBranch %101
        %114 = OpLabel
        %128 = OpPhi %6 %130 %101 %26 %109
        %124 = OpPhi %15 %126 %101 %16 %109
               OpSelectionMerge %116 None
               OpBranchConditional %124 %118 %116
        %116 = OpLabel
               OpBranch %117
        %117 = OpLabel
               OpBranch %98
        %118 = OpLabel
               OpSelectionMerge %120 None
               OpBranchConditional %124 %121 %120
        %120 = OpLabel
               OpBranch %121
        %121 = OpLabel
         %55 = OpAccessChain %49 %48 %19 %26
         %56 = OpLoad %6 %55
         %57 = OpIEqual %15 %128 %56
               OpSelectionMerge %59 None
               OpBranchConditional %57 %58 %75
         %75 = OpLabel
         %76 = OpAccessChain %49 %48 %19 %19
         %77 = OpLoad %6 %76
         %78 = OpConvertSToF %28 %77
         %79 = OpCompositeConstruct %29 %78 %78 %78 %78
               OpStore %61 %79
               OpBranch %59
         %58 = OpLabel
         %64 = OpConvertSToF %28 %56
         %65 = OpAccessChain %49 %48 %19 %19
         %66 = OpLoad %6 %65
         %67 = OpConvertSToF %28 %66
         %74 = OpCompositeConstruct %29 %64 %67 %67 %64
               OpStore %61 %74
               OpBranch %59
         %59 = OpLabel
               OpReturn
               OpFunctionEnd
