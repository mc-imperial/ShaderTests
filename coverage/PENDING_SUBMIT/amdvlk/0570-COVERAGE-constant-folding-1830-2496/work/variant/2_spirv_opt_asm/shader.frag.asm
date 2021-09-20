; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 102
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %76
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %15 "buf0"
               OpMemberName %15 0 "_GLF_uniform_int_values"
               OpName %17 ""
               OpName %76 "_GLF_color"
               OpDecorate %14 ArrayStride 16
               OpMemberDecorate %15 0 Offset 0
               OpDecorate %15 Block
               OpDecorate %17 DescriptorSet 0
               OpDecorate %17 Binding 0
               OpDecorate %76 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %9 = OpConstant %6 0
         %12 = OpTypeInt 32 0
         %13 = OpConstant %12 4
         %14 = OpTypeArray %6 %13
         %15 = OpTypeStruct %14
         %16 = OpTypePointer Uniform %15
         %17 = OpVariable %16 Uniform
         %18 = OpConstant %6 1
         %19 = OpTypePointer Uniform %6
         %28 = OpConstant %6 10
         %29 = OpTypeBool
         %34 = OpTypeFloat 32
         %44 = OpTypeVector %6 2
         %46 = OpConstantComposite %44 %9 %9
         %59 = OpConstant %6 2
         %68 = OpConstant %6 3
         %74 = OpTypeVector %34 4
         %75 = OpTypePointer Output %74
         %76 = OpVariable %75 Output
        %101 = OpUndef %6
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %20 = OpAccessChain %19 %17 %9 %18
         %21 = OpLoad %6 %20
               OpBranch %22
         %22 = OpLabel
         %96 = OpPhi %6 %21 %5 %32 %25
         %95 = OpPhi %6 %9 %5 %98 %25
         %30 = OpSLessThan %29 %95 %28
               OpLoopMerge %24 %25 None
               OpBranchConditional %30 %23 %24
         %23 = OpLabel
         %32 = OpIAdd %6 %96 %18
         %45 = OpCompositeConstruct %44 %18 %101
         %47 = OpAccessChain %19 %17 %9 %9
         %48 = OpLoad %6 %47
         %49 = OpCompositeConstruct %44 %48 %48
         %50 = OpExtInst %44 %1 SClamp %45 %46 %49
         %52 = OpCompositeExtract %6 %50 0
               OpBranch %53
         %53 = OpLabel
         %98 = OpPhi %6 %95 %23 %64 %54
         %97 = OpPhi %6 %52 %23 %66 %54
         %60 = OpAccessChain %19 %17 %9 %59
         %61 = OpLoad %6 %60
         %62 = OpSLessThan %29 %97 %61
               OpLoopMerge %55 %54 None
               OpBranchConditional %62 %54 %55
         %54 = OpLabel
         %64 = OpIAdd %6 %98 %18
         %66 = OpIAdd %6 %97 %18
               OpBranch %53
         %55 = OpLabel
               OpBranch %25
         %25 = OpLabel
               OpBranch %22
         %24 = OpLabel
         %69 = OpAccessChain %19 %17 %9 %68
         %70 = OpLoad %6 %69
         %71 = OpIEqual %29 %96 %70
               OpSelectionMerge %73 None
               OpBranchConditional %71 %72 %90
         %72 = OpLabel
         %77 = OpAccessChain %19 %17 %9 %9
         %78 = OpLoad %6 %77
         %79 = OpConvertSToF %34 %78
         %82 = OpConvertSToF %34 %21
         %89 = OpCompositeConstruct %74 %79 %82 %82 %79
               OpStore %76 %89
               OpBranch %73
         %90 = OpLabel
         %93 = OpConvertSToF %34 %21
         %94 = OpCompositeConstruct %74 %93 %93 %93 %93
               OpStore %76 %94
               OpBranch %73
         %73 = OpLabel
               OpReturn
               OpFunctionEnd
