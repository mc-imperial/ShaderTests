; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 89
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %30 %76
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %7 "buf2"
               OpMemberName %7 0 "one"
               OpName %9 ""
               OpName %18 "buf0"
               OpMemberName %18 0 "_GLF_uniform_float_values"
               OpName %20 ""
               OpName %30 "gl_FragCoord"
               OpName %49 "buf1"
               OpMemberName %49 0 "_GLF_uniform_int_values"
               OpName %51 ""
               OpName %76 "_GLF_color"
               OpMemberDecorate %7 0 Offset 0
               OpDecorate %7 Block
               OpDecorate %9 DescriptorSet 0
               OpDecorate %9 Binding 2
               OpDecorate %17 ArrayStride 16
               OpMemberDecorate %18 0 Offset 0
               OpDecorate %18 Block
               OpDecorate %20 DescriptorSet 0
               OpDecorate %20 Binding 0
               OpDecorate %30 BuiltIn FragCoord
               OpDecorate %48 ArrayStride 16
               OpMemberDecorate %49 0 Offset 0
               OpDecorate %49 Block
               OpDecorate %51 DescriptorSet 0
               OpDecorate %51 Binding 1
               OpDecorate %76 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeStruct %6
          %8 = OpTypePointer Uniform %7
          %9 = OpVariable %8 Uniform
         %10 = OpTypeInt 32 1
         %11 = OpConstant %10 0
         %12 = OpTypePointer Uniform %6
         %15 = OpTypeInt 32 0
         %16 = OpConstant %15 1
         %17 = OpTypeArray %6 %16
         %18 = OpTypeStruct %17
         %19 = OpTypePointer Uniform %18
         %20 = OpVariable %19 Uniform
         %23 = OpTypeBool
         %28 = OpTypeVector %6 4
         %29 = OpTypePointer Input %28
         %30 = OpVariable %29 Input
         %31 = OpConstant %15 0
         %32 = OpTypePointer Input %6
         %35 = OpConstant %6 0
         %47 = OpConstant %15 2
         %48 = OpTypeArray %10 %47
         %49 = OpTypeStruct %48
         %50 = OpTypePointer Uniform %49
         %51 = OpVariable %50 Uniform
         %52 = OpConstant %10 1
         %53 = OpTypePointer Uniform %10
         %75 = OpTypePointer Output %28
         %76 = OpVariable %75 Output
         %77 = OpConstant %6 1
         %78 = OpConstantComposite %28 %77 %35 %35 %77
         %81 = OpConstantFalse %23
         %84 = OpConstantTrue %23
          %4 = OpFunction %2 None %3
          %5 = OpLabel
               OpSelectionMerge %79 None
               OpSwitch %31 %80
         %80 = OpLabel
         %13 = OpAccessChain %12 %9 %11
         %14 = OpLoad %6 %13
         %21 = OpAccessChain %12 %20 %11 %11
         %22 = OpLoad %6 %21
         %24 = OpFOrdGreaterThan %23 %14 %22
               OpSelectionMerge %26 None
               OpBranchConditional %24 %25 %26
         %25 = OpLabel
               OpBranch %79
         %26 = OpLabel
         %33 = OpAccessChain %32 %30 %31
         %34 = OpLoad %6 %33
         %36 = OpFOrdLessThan %23 %34 %35
               OpSelectionMerge %38 None
               OpBranchConditional %36 %37 %38
         %37 = OpLabel
               OpSelectionMerge %43 None
               OpBranchConditional %36 %42 %43
         %42 = OpLabel
               OpBranch %79
         %43 = OpLabel
         %54 = OpAccessChain %53 %51 %11 %52
         %55 = OpLoad %10 %54
               OpBranch %56
         %56 = OpLabel
         %87 = OpPhi %10 %55 %43 %74 %59
         %62 = OpAccessChain %53 %51 %11 %11
         %63 = OpLoad %10 %62
         %64 = OpSLessThan %23 %87 %63
               OpLoopMerge %58 %59 None
               OpBranchConditional %64 %57 %58
         %57 = OpLabel
         %69 = OpFOrdLessThan %23 %34 %22
               OpSelectionMerge %71 None
               OpBranchConditional %69 %70 %71
         %70 = OpLabel
               OpBranch %58
         %71 = OpLabel
               OpBranch %59
         %59 = OpLabel
         %74 = OpIAdd %10 %87 %52
               OpBranch %56
         %58 = OpLabel
         %88 = OpPhi %23 %81 %56 %84 %70
               OpSelectionMerge %85 None
               OpBranchConditional %88 %79 %85
         %85 = OpLabel
               OpBranch %38
         %38 = OpLabel
               OpStore %76 %78
               OpBranch %79
         %79 = OpLabel
               OpReturn
               OpFunctionEnd
