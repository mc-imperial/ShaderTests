; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 59
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %42 %54
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "i"
               OpName %12 "buf0"
               OpMemberName %12 0 "_GLF_uniform_int_values"
               OpName %14 ""
               OpName %42 "gl_FragCoord"
               OpName %54 "_GLF_color"
               OpDecorate %11 ArrayStride 16
               OpMemberDecorate %12 0 Offset 0
               OpDecorate %12 Block
               OpDecorate %14 DescriptorSet 0
               OpDecorate %14 Binding 0
               OpDecorate %42 BuiltIn FragCoord
               OpDecorate %54 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %9 = OpTypeInt 32 0
         %10 = OpConstant %9 2
         %11 = OpTypeArray %6 %10
         %12 = OpTypeStruct %11
         %13 = OpTypePointer Uniform %12
         %14 = OpVariable %13 Uniform
         %15 = OpConstant %6 0
         %16 = OpConstant %6 1
         %17 = OpTypePointer Uniform %6
         %28 = OpTypeBool
         %35 = OpConstant %6 2
         %39 = OpTypeFloat 32
         %40 = OpTypeVector %39 4
         %41 = OpTypePointer Input %40
         %42 = OpVariable %41 Input
         %43 = OpConstant %9 0
         %44 = OpTypePointer Input %39
         %47 = OpConstant %39 0
         %53 = OpTypePointer Output %40
         %54 = OpVariable %53 Output
         %55 = OpConstant %39 1
         %56 = OpConstantComposite %40 %55 %47 %47 %55
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %18 = OpAccessChain %17 %14 %15 %16
         %19 = OpLoad %6 %18
               OpStore %8 %19
               OpBranch %20
         %20 = OpLabel
               OpLoopMerge %22 %23 None
               OpBranch %24
         %24 = OpLabel
         %25 = OpLoad %6 %8
         %26 = OpAccessChain %17 %14 %15 %15
         %27 = OpLoad %6 %26
         %29 = OpSLessThan %28 %25 %27
               OpBranchConditional %29 %21 %22
         %21 = OpLabel
         %30 = OpLoad %6 %8
         %31 = OpINotEqual %28 %30 %16
               OpSelectionMerge %33 None
               OpBranchConditional %31 %32 %33
         %32 = OpLabel
         %34 = OpLoad %6 %8
         %36 = OpINotEqual %28 %34 %35
               OpSelectionMerge %38 None
               OpBranchConditional %36 %37 %38
         %37 = OpLabel
         %45 = OpAccessChain %44 %42 %43
         %46 = OpLoad %39 %45
         %48 = OpFOrdLessThan %28 %46 %47
               OpSelectionMerge %50 None
               OpBranchConditional %48 %49 %52
         %49 = OpLabel
               OpKill
         %52 = OpLabel
               OpStore %54 %56
               OpBranch %50
         %50 = OpLabel
               OpBranch %38
         %38 = OpLabel
               OpBranch %33
         %33 = OpLabel
               OpBranch %23
         %23 = OpLabel
         %57 = OpLoad %6 %8
         %58 = OpIAdd %6 %57 %16
               OpStore %8 %58
               OpBranch %20
         %22 = OpLabel
               OpReturn
               OpFunctionEnd
