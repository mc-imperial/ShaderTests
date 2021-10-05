; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 104
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %79
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %12 "buf0"
               OpMemberName %12 0 "_GLF_uniform_int_values"
               OpName %14 ""
               OpName %52 "buf1"
               OpMemberName %52 0 "zero"
               OpName %54 ""
               OpName %79 "_GLF_color"
               OpDecorate %11 ArrayStride 16
               OpMemberDecorate %12 0 Offset 0
               OpDecorate %12 Block
               OpDecorate %14 DescriptorSet 0
               OpDecorate %14 Binding 0
               OpMemberDecorate %52 0 Offset 0
               OpDecorate %52 Block
               OpDecorate %54 DescriptorSet 0
               OpDecorate %54 Binding 1
               OpDecorate %79 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %9 = OpTypeInt 32 0
         %10 = OpConstant %9 3
         %11 = OpTypeArray %6 %10
         %12 = OpTypeStruct %11
         %13 = OpTypePointer Uniform %12
         %14 = OpVariable %13 Uniform
         %15 = OpConstant %6 0
         %16 = OpConstant %6 1
         %17 = OpTypePointer Uniform %6
         %31 = OpTypeBool
         %43 = OpConstant %6 2
         %52 = OpTypeStruct %6
         %53 = OpTypePointer Uniform %52
         %54 = OpVariable %53 Uniform
         %76 = OpTypeFloat 32
         %77 = OpTypeVector %76 4
         %78 = OpTypePointer Output %77
         %79 = OpVariable %78 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %18 = OpAccessChain %17 %14 %15 %16
         %19 = OpLoad %6 %18
               OpBranch %23
         %23 = OpLabel
         %98 = OpPhi %6 %19 %5 %35 %26
        %101 = OpPhi %6 %19 %5 %98 %26
         %29 = OpAccessChain %17 %14 %15 %15
         %30 = OpLoad %6 %29
         %32 = OpSGreaterThan %31 %98 %30
               OpLoopMerge %25 %26 None
               OpBranchConditional %32 %24 %25
         %24 = OpLabel
         %35 = OpIAdd %6 %98 %16
               OpBranch %37
         %37 = OpLabel
         %99 = OpPhi %6 %15 %24 %51 %40
         %44 = OpSLessThan %31 %99 %43
               OpLoopMerge %39 %40 None
               OpBranchConditional %44 %38 %39
         %38 = OpLabel
               OpSelectionMerge %47 None
               OpSwitch %98 %47 0 %46 3 %46
         %46 = OpLabel
               OpKill
         %47 = OpLabel
               OpBranch %40
         %40 = OpLabel
         %51 = OpIAdd %6 %99 %16
               OpBranch %37
         %39 = OpLabel
         %55 = OpAccessChain %17 %54 %15
         %56 = OpLoad %6 %55
         %59 = OpIEqual %31 %56 %30
               OpSelectionMerge %61 None
               OpBranchConditional %59 %60 %61
         %60 = OpLabel
               OpBranch %25
         %61 = OpLabel
               OpBranch %26
         %26 = OpLabel
               OpBranch %23
         %25 = OpLabel
        %103 = OpPhi %6 %98 %23 %35 %60
        %100 = OpPhi %6 %101 %23 %98 %60
         %66 = OpIEqual %31 %100 %19
               OpSelectionMerge %68 None
               OpBranchConditional %66 %67 %68
         %67 = OpLabel
         %70 = OpAccessChain %17 %14 %15 %43
         %71 = OpLoad %6 %70
         %72 = OpIEqual %31 %103 %71
               OpBranch %68
         %68 = OpLabel
         %73 = OpPhi %31 %66 %25 %72 %67
               OpSelectionMerge %75 None
               OpBranchConditional %73 %74 %93
         %74 = OpLabel
         %82 = OpConvertSToF %76 %19
         %85 = OpConvertSToF %76 %30
         %92 = OpCompositeConstruct %77 %82 %85 %85 %82
               OpStore %79 %92
               OpBranch %75
         %93 = OpLabel
         %96 = OpConvertSToF %76 %30
         %97 = OpCompositeConstruct %77 %96 %96 %96 %96
               OpStore %79 %97
               OpBranch %75
         %75 = OpLabel
               OpReturn
               OpFunctionEnd
