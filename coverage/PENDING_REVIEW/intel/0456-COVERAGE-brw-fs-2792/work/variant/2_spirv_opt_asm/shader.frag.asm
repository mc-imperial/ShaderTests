; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 177
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %56
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %16 "buf0"
               OpMemberName %16 0 "_GLF_uniform_int_values"
               OpName %18 ""
               OpName %56 "_GLF_color"
               OpDecorate %15 ArrayStride 16
               OpMemberDecorate %16 0 Offset 0
               OpDecorate %16 Block
               OpDecorate %18 DescriptorSet 0
               OpDecorate %18 Binding 0
               OpDecorate %56 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
         %13 = OpTypeInt 32 0
         %14 = OpConstant %13 6
         %15 = OpTypeArray %6 %14
         %16 = OpTypeStruct %15
         %17 = OpTypePointer Uniform %16
         %18 = OpVariable %17 Uniform
         %19 = OpConstant %6 0
         %20 = OpConstant %6 3
         %21 = OpTypePointer Uniform %6
         %24 = OpTypeBool
         %28 = OpConstant %6 2
         %39 = OpConstant %6 4
         %43 = OpTypeFloat 32
         %44 = OpTypeVector %43 4
         %53 = OpConstant %6 1
         %55 = OpTypePointer Output %44
         %56 = OpVariable %55 Output
         %89 = OpTypeVector %24 4
         %95 = OpConstant %6 5
        %124 = OpConstant %13 0
        %170 = OpUndef %44
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %63 = OpAccessChain %21 %18 %19 %19
         %64 = OpLoad %6 %63
         %66 = OpAccessChain %21 %18 %19 %53
         %67 = OpLoad %6 %66
               OpBranch %68
         %68 = OpLabel
        %169 = OpPhi %44 %170 %5 %176 %71
        %166 = OpPhi %6 %64 %5 %81 %71
        %165 = OpPhi %6 %67 %5 %83 %71
         %74 = OpAccessChain %21 %18 %19 %39
         %75 = OpLoad %6 %74
         %76 = OpSLessThan %24 %165 %75
               OpLoopMerge %70 %71 None
               OpBranchConditional %76 %69 %70
         %69 = OpLabel
               OpSelectionMerge %163 None
               OpSwitch %124 %135
        %135 = OpLabel
        %137 = OpAccessChain %21 %18 %19 %20
        %138 = OpLoad %6 %137
        %139 = OpSGreaterThan %24 %165 %138
               OpSelectionMerge %141 None
               OpBranchConditional %139 %140 %141
        %140 = OpLabel
               OpBranch %163
        %141 = OpLabel
               OpBranch %144
        %144 = OpLabel
        %168 = OpPhi %44 %169 %141 %155 %150
        %167 = OpPhi %6 %64 %141 %158 %150
        %149 = OpSLessThan %24 %167 %75
               OpLoopMerge %159 %150 None
               OpBranchConditional %149 %150 %159
        %150 = OpLabel
        %153 = OpIAdd %6 %165 %167
        %154 = OpConvertSToF %43 %153
        %155 = OpCompositeConstruct %44 %154 %154 %154 %154
        %158 = OpIAdd %6 %167 %53
               OpBranch %144
        %159 = OpLabel
               OpStore %56 %168
               OpBranch %163
        %163 = OpLabel
        %176 = OpPhi %44 %169 %140 %168 %159
        %171 = OpPhi %6 %28 %140 %67 %159
         %81 = OpIAdd %6 %166 %171
               OpBranch %71
         %71 = OpLabel
         %83 = OpIAdd %6 %165 %53
               OpBranch %68
         %70 = OpLabel
         %84 = OpLoad %44 %56
         %85 = OpAccessChain %21 %18 %19 %28
         %86 = OpLoad %6 %85
         %87 = OpConvertSToF %43 %86
         %88 = OpCompositeConstruct %44 %87 %87 %87 %87
         %90 = OpFOrdEqual %89 %84 %88
         %91 = OpAll %24 %90
               OpSelectionMerge %93 None
               OpBranchConditional %91 %92 %93
         %92 = OpLabel
         %96 = OpAccessChain %21 %18 %19 %95
         %97 = OpLoad %6 %96
         %98 = OpIEqual %24 %166 %97
               OpBranch %93
         %93 = OpLabel
         %99 = OpPhi %24 %91 %70 %98 %92
               OpSelectionMerge %101 None
               OpBranchConditional %99 %100 %115
        %100 = OpLabel
        %104 = OpConvertSToF %43 %67
        %107 = OpConvertSToF %43 %64
        %114 = OpCompositeConstruct %44 %104 %107 %107 %104
               OpStore %56 %114
               OpBranch %101
        %115 = OpLabel
        %118 = OpConvertSToF %43 %64
        %119 = OpCompositeConstruct %44 %118 %118 %118 %118
               OpStore %56 %119
               OpBranch %101
        %101 = OpLabel
               OpReturn
               OpFunctionEnd
