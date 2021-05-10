; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 55
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %50
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "a"
               OpName %10 "i"
               OpName %20 "buf0"
               OpMemberName %20 0 "one"
               OpName %22 ""
               OpName %50 "_GLF_color"
               OpMemberDecorate %20 0 Offset 0
               OpDecorate %20 Block
               OpDecorate %22 DescriptorSet 0
               OpDecorate %22 Binding 0
               OpDecorate %50 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %9 = OpConstant %6 0
         %17 = OpConstant %6 5
         %18 = OpTypeBool
         %20 = OpTypeStruct %6
         %21 = OpTypePointer Uniform %20
         %22 = OpVariable %21 Uniform
         %23 = OpTypePointer Uniform %6
         %29 = OpConstant %6 -4194304
         %30 = OpTypeFloat 32
         %33 = OpConstant %30 0
         %37 = OpConstant %6 -1
         %40 = OpConstant %6 1
         %48 = OpTypeVector %30 4
         %49 = OpTypePointer Output %48
         %50 = OpVariable %49 Output
         %51 = OpConstant %30 1
         %52 = OpConstantComposite %48 %51 %33 %33 %51
         %54 = OpConstantComposite %48 %33 %33 %33 %33
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %10 = OpVariable %7 Function
               OpStore %8 %9
               OpStore %10 %9
               OpBranch %11
         %11 = OpLabel
               OpLoopMerge %13 %14 None
               OpBranch %15
         %15 = OpLabel
         %16 = OpLoad %6 %10
         %19 = OpSLessThan %18 %16 %17
               OpBranchConditional %19 %12 %13
         %12 = OpLabel
         %24 = OpAccessChain %23 %22 %9
         %25 = OpLoad %6 %24
         %26 = OpIEqual %18 %25 %9
               OpSelectionMerge %28 None
               OpBranchConditional %26 %27 %28
         %27 = OpLabel
         %31 = OpBitcast %30 %29
         %32 = OpExtInst %30 %1 Floor %31
         %34 = OpFOrdGreaterThan %18 %32 %33
               OpSelectionMerge %36 None
               OpBranchConditional %34 %35 %36
         %35 = OpLabel
               OpStore %8 %37
               OpBranch %13
         %36 = OpLabel
               OpBranch %28
         %28 = OpLabel
         %39 = OpLoad %6 %8
         %41 = OpIAdd %6 %39 %40
               OpStore %8 %41
               OpBranch %14
         %14 = OpLabel
         %42 = OpLoad %6 %10
         %43 = OpIAdd %6 %42 %40
               OpStore %10 %43
               OpBranch %11
         %13 = OpLabel
         %44 = OpLoad %6 %8
         %45 = OpIEqual %18 %44 %17
               OpSelectionMerge %47 None
               OpBranchConditional %45 %46 %53
         %46 = OpLabel
               OpStore %50 %52
               OpBranch %47
         %53 = OpLabel
               OpStore %50 %54
               OpBranch %47
         %47 = OpLabel
               OpReturn
               OpFunctionEnd
