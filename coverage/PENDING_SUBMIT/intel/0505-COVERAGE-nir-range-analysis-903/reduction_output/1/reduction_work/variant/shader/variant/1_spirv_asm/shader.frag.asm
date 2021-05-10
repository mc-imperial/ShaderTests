; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 50
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %45
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "a"
               OpName %12 "f"
               OpName %20 "buf0"
               OpMemberName %20 0 "one"
               OpName %22 ""
               OpName %45 "_GLF_color"
               OpMemberDecorate %20 0 Offset 0
               OpDecorate %20 Block
               OpDecorate %22 DescriptorSet 0
               OpDecorate %22 Binding 0
               OpDecorate %45 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %9 = OpConstant %6 0
         %10 = OpTypeFloat 32
         %11 = OpTypePointer Function %10
         %13 = OpConstant %6 -4194304
         %20 = OpTypeStruct %6
         %21 = OpTypePointer Uniform %20
         %22 = OpVariable %21 Uniform
         %23 = OpTypePointer Uniform %6
         %26 = OpTypeBool
         %31 = OpConstant %10 0
         %35 = OpConstant %6 2
         %37 = OpConstant %6 1
         %38 = OpConstantFalse %26
         %43 = OpTypeVector %10 4
         %44 = OpTypePointer Output %43
         %45 = OpVariable %44 Output
         %46 = OpConstant %10 1
         %47 = OpConstantComposite %43 %46 %31 %31 %46
         %49 = OpConstantComposite %43 %31 %31 %31 %31
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %12 = OpVariable %11 Function
               OpStore %8 %9
         %14 = OpBitcast %10 %13
         %15 = OpExtInst %10 %1 Floor %14
               OpStore %12 %15
               OpBranch %16
         %16 = OpLabel
               OpLoopMerge %18 %19 None
               OpBranch %17
         %17 = OpLabel
         %24 = OpAccessChain %23 %22 %9
         %25 = OpLoad %6 %24
         %27 = OpIEqual %26 %25 %9
               OpSelectionMerge %29 None
               OpBranchConditional %27 %28 %29
         %28 = OpLabel
         %30 = OpLoad %10 %12
         %32 = OpFOrdGreaterThan %26 %30 %31
               OpSelectionMerge %34 None
               OpBranchConditional %32 %33 %34
         %33 = OpLabel
               OpStore %8 %35
               OpBranch %18
         %34 = OpLabel
               OpBranch %29
         %29 = OpLabel
               OpStore %8 %37
               OpBranch %19
         %19 = OpLabel
               OpBranchConditional %38 %16 %18
         %18 = OpLabel
         %39 = OpLoad %6 %8
         %40 = OpIEqual %26 %39 %37
               OpSelectionMerge %42 None
               OpBranchConditional %40 %41 %48
         %41 = OpLabel
               OpStore %45 %47
               OpBranch %42
         %48 = OpLabel
               OpStore %45 %49
               OpBranch %42
         %42 = OpLabel
               OpReturn
               OpFunctionEnd
